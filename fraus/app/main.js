// ALL METHODS MUST HAVE FIRST PARAMETER TO HOLD INCOMING MODULES
{
    monthly: (M) => {
        // daapi.openDevTools();

        console.log('inside monthly - fraus');
        const modState = M.getModState();

        if (!modState) {
            // first load, set stuff up
        }

        daapi.deleteGlobalAction({ key: 'frausGlobal' });
        daapi.addGlobalAction({
            key: 'frausGlobal',
            action: {
                title: "Household Cheats",
                icon: daapi.requireImage('/fraus/assets/repair.svg'),
                isAvailable: true,
                process: {
                    event: '/fraus/app/appMethods',
                    method: 'globalCheatEntry',
                    context: {
                        E: M
                    }
                }
            }
        });
        M.updateCharacterActionIcons();
    },
    yearly: (M) => {
        console.log('inside yearly - fraus');
    }
}