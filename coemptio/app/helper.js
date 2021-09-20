// ALL METHODS MUST HAVE FIRST PARAMETER TO HOLD INCOMING MODULES
{
    getCharacter: (E) => {
        return daapi.getCharacter({
            characterId: daapi.getState().current.id
        });
    },
    generateRandomIntegerBetween: (E, min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomWithMeanAndStdDev: (E, m, s) => {
        return parseFloat(m + 2.0 * s * (Math.random() + Math.random() + Math.random() - 1.5)).toFixed(2);
    },
    randomStepValues: (E, steps) => {
        let value, defaultValue, past = 0,
            r = E.generateRandomIntegerBetween(1, 100);
        const valueFromItem = (item) => {
            console.log("ITEM: ", item);
            if (item.value || item.value === 0)
                return item.value;

            if ((item.min || item.min === 0) && item.max)
                return E.generateRandomIntegerBetween(item.min, item.max);

            throw new Error("Invalid item");
        };
        steps.sort((a, b) => {
            return b.chance - a.chance;
        }).forEach((item) => {
            if (value) return;
            if (item.chance == 0) {
                defaultValue = valueFromItem(item);
            } else if (r <= (item.chance + past)) {
                value = valueFromItem(item);
            }
            past += item.chance;
        });
        return value || defaultValue || -1;
    },
    pushInteractionModalQueue: (E, params) => {
        // REPLACE ME
        const moduleName = '/coemptio/app/helper';
        daapi.invokeMethod({
            event: moduleName,
            method: "genericPushInteractionModalQueue",
            context: params
        });
    },
    addSkillToCharacter: (E, { characterId, skill, value }) => {
        const skillsValues = daapi.getCharacter({ characterId }).skills;

        skillsValues[skill] = Number.parseFloat(skillsValues[skill]) + parseFloat(value);

        daapi.updateCharacter({
            characterId: characterId,
            character: {
                skills: skillsValues
            }
        });
    },
    filterHouseCharacters: (E, ch = null, fn) => {
        return daapi.getState().current.householdCharacterIds.map((cId) => {
            return daapi.getCharacter({ characterId: cId });
        }).filter((ch) => {
            return fn(ch);
        });
    },
    randomFromArray: (E, a) => {
        return a[Math.floor(Math.random() * a.length)];
    },
    uuid: (E) => {
        const b = crypto.getRandomValues(new Uint16Array(8));
        const d = [].map.call(b, a => a.toString(16).padStart(4, '0')).join('');
        const vr = (((b[5] >> 12) & 3) | 8).toString(16);
        return `${d.substr(0, 8)}-${d.substr(8, 4)}-4${d.substr(13, 3)}-${vr}${d.substr(17, 3)}-${d.substr(20, 12)}`;
    },
    isFunction: (E, functionToCheck) => {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    },
    methods: {
        genericPushInteractionModalQueue: (params) => {
            daapi.pushInteractionModalQueue(params);
        }
    }
}