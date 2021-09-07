// ALL METHODS MUST HAVE FIRST PARAMETER TO HOLD INCOMING MODULES
{
    monthly: (M) => {
        console.log('inside monthly');
        console.log(M, M.getCharacter());
    },
    yearly: (M) => {
        console.log('inside yearly');
        console.log(M, M.getCharacter());
    }
    // thisModuleProcessor: (E, method, context)=> {
    //     return {
    //         event: '/MOD_PATH/app/THIS_MODULE',
    //         method: 'genericProcessorHandler',
    //         context: Object.assign({method: method, E: E}, context)
    //     }
    // },
    // methods: {
    //     genericProcessorHandler: (context)=>{
    //         context.E[context.method](context);
    //     }
    // }    
}