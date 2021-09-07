// ALL METHODS MUST HAVE FIRST PARAMETER TO HOLD INCOMING MODULES
{
    monthly: (M) => {
        console.log('inside monthly');
        const modState = M.getModState();

        if (!modState) {
            // first load, set stuff up
            
        }

        M.updateCharacterActionIcons();
    },
    yearly: (M) => {
        console.log('inside yearly');
    }
}