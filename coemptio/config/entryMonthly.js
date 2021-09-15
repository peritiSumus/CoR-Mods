{
    canTriggerIfUnavailable: true,
    checkType: 'general',
    checkAndAct: (c) => {
        // daapi.openDevTools();

        const DEBUG = false;

        // START CONFIG PER PROJECT
        const entryPath = "/coemptio/config/entryMonthly";
        const modules = ['/coemptio/app/main', '/coemptio/app/helper', '/coemptio/app/appMethods']; // add all of your modules with methods you want to be able to call anywhere here
        // END CONFIG PER PROJECT

        console.log('ENTRY: ' + entryPath);

        const setupMultipleModules = daapi.modData["events"][entryPath].setupMultipleModules;
        const methods = setupMultipleModules(modules, DEBUG, entryPath);

        methods.monthly(c);
    },
    methods: () => {

    },
    isFunction: (functionToCheck) => {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    },
    setupMultipleModules: (modules, DEBUG = false, entryPath) => {
        const setupMethod = daapi.modData["events"][entryPath].setupMethod;
        return Object.assign({}, ...modules.map((item) => {
            return setupMethod(item, DEBUG, entryPath, modules);
        }));
    },
    setupMethod: (path, debug = false, entryPath, modules) => {
        const methodsObject = daapi.modData.events[path];
        const returnObject = {};

        debug = methodsObject._debug || debug;
        methodsObject._debug = debug;
        for (prop in methodsObject) {
            //            if (prop.match(/^_[a-zA-Z0-9]{1}.+?$/)) {
            if (daapi.modData.events[entryPath].isFunction(methodsObject[prop])) {
                // prop.slice(1)
                returnObject[prop] = (function(m, p) {
                    return function(...args) {
                        try {
                            if (debug) {
                                console.log("CALLING: " + p, ...args);
                            }
                            const setupMultipleModules = daapi.modData["events"][entryPath].setupMultipleModules;
                            const methods = setupMultipleModules(modules, debug, entryPath);

                            const retVal = m[p](methods, ...args);
                            if (debug && retVal) {
                                console.log("RETURNING: " + p, retVal);
                            }
                            return retVal;
                        } catch (e) {
                            console.log(`ERROR CALLING ${p}`, ...args, e);
                        }
                    }
                })(methodsObject, prop);
            } else {
                // prop.slice(1)
                returnObject[prop] = methodsObject[prop];
            }
            // }
        }

        return returnObject;
    }
}