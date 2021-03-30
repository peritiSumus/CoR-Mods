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
}