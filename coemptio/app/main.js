// ALL METHODS MUST HAVE FIRST PARAMETER TO HOLD INCOMING MODULES
{
    monthly: (M) => {
        // daapi.openDevTools();
        console.log('inside monthly');
        const modState = M.getModState();

        if (!modState) {
            // first load, set stuff up

        }

        console.log("COEMPTIO: update icons");
        M.updateCharacterActionIcons();
    },
    yearly: (M) => {
        console.log('inside yearly');
    }
}