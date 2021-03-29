{
    canTriggerIfUnavailable: true,
    checkType: 'general',
    checkAndAct: () => {
        // daapi.openDevTools();
        
        const characterId = daapi.getState().current.id;
        const loanData = daapi.getGlobalFlag({flag: 'bank_of_rome'}) || {
            principle: 0,
            button: false,
            buttonCharacterId: '',
            loansTaken: 0
        };
        const hasLoan = (loanData.principle > 0);
        const currentCash = daapi.getState().current.cash;
        const buttonVisible = loanData.button;

        if (!hasLoan && currentCash < 500) {
            if (!buttonVisible) {
                loanData.buttonCharacterId = characterId;
                loanData.button = true;
                daapi.setGlobalFlag({flag: 'bank_of_rome', data: loanData });
                
                daapi.addCharacterAction({
                    characterId: characterId,
                    key: 'bank_of_rome',
                    action: {
                        title: 'Ask for a loan',
                        icon: daapi.requireImage('/bank_of_rome/assets/money.svg'),
                        isAvailable: true,
                        hideWhenBusy: true,
                        process: {
                            event: '/bank_of_rome/events/doMonthlyEvents',
                            method: 'offerLoanProcess'
                        }
                    }
                });
                daapi.updateCharacter({});
            }
        } else {
            if (buttonVisible) {
                loanData.button = false;
                daapi.setGlobalFlag({flag: 'bank_of_rome', data: loanData });
                daapi.deleteCharacterAction({
                    characterId: loanData.buttonCharacterId,
                    key: 'bank_of_rome'
                });
                daapi.updateCharacter({});
            }
        }
    },
    methods: {
        offerLoanProcess: ()=>{
            // console.log('offerLoanProcess');
            const loanData = daapi.getGlobalFlag({flag: 'bank_of_rome'}) || {
                principle: 0,
                button: false,
                buttonCharacterId: '',
                loansTaken: 0
            };
    
            const scale = daapi.calculateScaleByClassFactor();
            const loanOptions = [];
            const addLoanOption = (amount) => {
                amount = amount * (daapi.getState().current.class + Math.min(loanData.loansTaken, 3));
                loanOptions.push({
                    text: `I'll take ${amount}! `,
                    tooltip: `Take a loan of $${amount}`,
                    statChanges: {
                        cash: amount / scale,
                    },
                    action: {
                        event: '/bank_of_rome/events/doMonthlyEvents',
                        method: 'doLoan',
                        context: { principle: amount, interestRate: 0.083 }
                    }
                });
            };

            addLoanOption(500);
            addLoanOption(1000);
            addLoanOption(2000);
            addLoanOption(5000);
            loanOptions.push({
                text: 'No thanks!'
            });
            daapi.pushInteractionModalQueue({
                title: 'Loan Offer',
                message: 'You are eligible for a loan from the Bank of Rome. You will have to pay at least your interest every year. Would you like some cash?',
                image: daapi.requireImage('/bank_of_rome/assets/money.svg'),
                options: loanOptions
            });
        },
        doLoan: ({principle, interestRate})=>{
            const loanData = daapi.getGlobalFlag({flag: 'bank_of_rome'}) || {
                principle: 0,
                button: false,
                buttonCharacterId: '',
                loansTaken: 0
            };
            loanData.loansTaken += 1;
            loanData.principle += principle;
            loanData.interestRate = interestRate;
            loanData.button = false;
            daapi.setGlobalFlag({flag: 'bank_of_rome', data: loanData });
            daapi.deleteCharacterAction({
                characterId: loanData.buttonCharacterId,
                key: 'bank_of_rome'
            });
            daapi.updateCharacter({});
        }
    }
}