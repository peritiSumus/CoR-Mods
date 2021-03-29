{
    canTriggerIfUnavailable: true,
    checkType: 'general',
    checkAndAct: ()=>{
        // daapi.openDevTools();
        const characterId = daapi.getState().current.id;
        const loanData = daapi.getGlobalFlag({flag: 'bank_of_rome'}) || {
            principle: 0,
            button: false,
            buttonCharacterId: ''
        };
        const hasLoan = (loanData.principle > 0);
        if (hasLoan) {
            daapi.invokeMethod({
                event: '/bank_of_rome/events/doYearlyEvents',
                method: 'paymentProcess'
            });
        }
    },
    methods: {
        paymentProcess: () => {
            const scale = daapi.calculateScaleByClassFactor();
            const characterId = daapi.getState().current.id;
            const loanData = daapi.getGlobalFlag({flag: 'bank_of_rome'}) || {
                principle: 0,
                button: false,
                buttonCharacterId: ''
            };
    
            const principle = loanData.principle;
            const interestRate = loanData.interestRate;
            const interestPayment = Math.ceil(principle * interestRate);

            const interactionOptions = [];
            const addOptionIfPrincipleGreaterThan = (amount) => {
                const total = amount + interestPayment;
                if (principle > amount) {
                    interactionOptions.push({
                        text: `Pay $${amount} on top of my interest payment of $${interestPayment} for a total of: `,
                        toolTip: `Pay ${total}`,
                        statChanges: {
                            cash: -1 * (total/scale),
                        },
                        action: {
                            event: '/bank_of_rome/events/doYearlyEvents',
                            method: 'doPayment',
                            context: { amount: amount }
                        }
                    });
                }
            };

            addOptionIfPrincipleGreaterThan(100);
            addOptionIfPrincipleGreaterThan(500);
            addOptionIfPrincipleGreaterThan(1000);
            addOptionIfPrincipleGreaterThan(2500);
            addOptionIfPrincipleGreaterThan(5000);

            const paymentTotal = interestPayment + principle;
            interactionOptions.push({
                text: `Pay the remainder of your loan of: `,
                toolTip: `Pay the remainder of your loan of: $${paymentTotal}`,
                statChanges: {
                    cash: -1 * (paymentTotal/scale),
                },
                action: {
                    event: '/bank_of_rome/events/doYearlyEvents',
                    method: 'doPayment',
                    context: { amount: paymentTotal }
                }
            });

            interactionOptions.push({
                text: `Pay only the interest: `,
                toolTip: `Pay only the interest: ${interestPayment}`,
                statChanges: {
                    cash: -1 * (interestPayment/scale),
                },
                action: {
                    event: '/bank_of_rome/events/requestPayment',
                    method: 'doPayment',
                    context: { amount: 0 }
                }
            });            
            daapi.pushInteractionModalQueue({
                title: 'Make a payment',
                message: 'It is time for you to pay me! You must pay at least your interest. Would you like to pay more?',
                image: daapi.requireImage('/bank_of_rome/assets/money.svg'),
                options: interactionOptions
            });
        },
        doPayment: ({ amount }) => {
            if (amount==0) return;

            // console.log('DO PAYMENT');
            // const scale = daapi.calculateScaleByClassFactor();
            const characterId = daapi.getState().current.id;
            const loanData = daapi.getGlobalFlag({flag: 'bank_of_rome'}) || {
                principle: 0,
                button: false,
                buttonCharacterId: ''
            };
            const principle = loanData.principle;

            if (principle < amount) 
                amount = principle;

            loanData.principle -= amount;
            daapi.setGlobalFlag({flag: 'bank_of_rome', data: loanData });
        }
    }
}