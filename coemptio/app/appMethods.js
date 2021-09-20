{
    methods: {
        genericProcessorHandler: (context) => {
            context.E[context.method](context);
        }
    },
    getModState: (E) => {
        return daapi.getGlobalFlag({
            flag: 'coemptio_mod_state'
        }) || {};
    },
    saveModState: (E, stateData) => {
        daapi.setGlobalFlag({
            flag: 'coemptio_mod_state',
            data: stateData
        });
    },
    addIconToCharacter: (E, c) => {
        console.log("add coemptio icon", c);
        try {
            const ret = daapi.addCharacterAction({
                characterId: c.id,
                key: 'coemptio' + c.id,
                action: {
                    title: 'Search for a suitor',
                    icon: daapi.requireImage('/coemptio/assets/marriage.svg'),
                    isAvailable: true,
                    hideWhenBusy: false,
                    process: E.thisModuleProcessor('runCoemptioIcon', {
                        characterId: c.id
                    })
                }
            });
            console.log(ret);
        } catch (e) {
            console.log(e);
        }
    },
    addBonusesToCandidate: (E, characterId, candidateId) => {
        const candidate = daapi.getCharacter({
                characterId: candidateId
            }),
            c = daapi.getCharacter({
                characterId: characterId
            });
        const countSkills = (skills) => {
            return (parseFloat(skills.combat) + parseFloat(skills.eloquence) + parseFloat(skills.intelligence) + parseFloat(skills.stewardship)).toFixed(2)
        };
        // do trait roll
        const traitRoll = Math.random();
        let candidateTraits = candidate.traits;
        if (traitRoll < (0.05 * 0.05 * 0.05)) {
            if (!candidateTraits.includes('strong')) candidateTraits.push('strong');
            if (!candidateTraits.includes('genius')) candidateTraits.push('genius');
            if (!candidateTraits.includes('attractive')) candidateTraits.push('attractive');
        } else if (traitRoll < (0.05 * 0.05)) {
            let added = 0;
            const skillMap = ['strong', 'genius', 'attractive'];
            while ((added < 2) && !(candidateTraits.includes('strong') && candidateTraits.includes('genius') && candidateTraits.includes('attractive'))) {
                let newSkill = skillMap[E.generateRandomIntegerBetween(0, 2)];
                if (!candidateTraits.includes(newSkill)) {
                    added += 1;
                    candidateTraits.push(newSkill);
                }
            }
        } else if (traitRoll < 0.05) {
            let added = 0;
            const skillMap = ['strong', 'genius', 'attractive'];
            while ((added < 1) && !(candidateTraits.includes('strong') && candidateTraits.includes('genius') && candidateTraits.includes('attractive'))) {
                let newSkill = skillMap[E.generateRandomIntegerBetween(0, 2)];
                if (!candidateTraits.includes(newSkill)) {
                    added += 1;
                    candidateTraits.push(newSkill);
                }
            }
        }
        const bonus = E.randomStepValues([{
                chance: 70,
                min: 0,
                max: 5
            },
            {
                chance: 20,
                min: 6,
                max: 12
            },
            {
                chance: 10,
                min: 12,
                max: 18
            }
        ]);

        const addToRandomSkill = (skills) => {
            const skillMap = ['intelligence', 'stewardship', 'eloquence', 'combat'];
            const skillRoll = E.randomStepValues([
                { chance: 35, value: 0 },
                { chance: 15, value: 1 },
                { chance: 15, value: 2 },
                { chance: 35, value: 3 }
            ]);
            const skillValueRoll = E.generateRandomIntegerBetween(1, 6);
            skills[skillMap[skillRoll]] += skillValueRoll;
            return skills;
        };
        let candidateSkills = candidate.skills;
        while ((countSkills(candidateSkills) - countSkills(c.skills)) < bonus) {
            candidateSkills = addToRandomSkill(candidateSkills);
        }
        daapi.updateCharacter({
            characterId: candidate.id,
            character: {
                skills: candidateSkills,
                traits: candidateTraits
            }
        });
        return daapi.getCharacter({
            characterId: candidate.id
        });
    },
    generateMatch: (E, characterId) => {
        let generatedCharacterId
        while (!generatedCharacterId) {
            generatedCharacterId = daapi.generateCharacter({
                characterFeatures: {
                    isMale: false,
                    birthYear: daapi.getState().year - (E.generateRandomIntegerBetween(12, 25))
                },
                dynastyFeatures: {
                    heritage: (Math.random() > 0.5) ? 'roman_freedman' : 'roman_patrician'
                }
            });
            const candidate = daapi.getCharacter({ characterId: generatedCharacterId });
            if (candidate.traits.includes('weak') || candidate.traits.includes('deformed') || candidate.traits.includes('dimwit') || candidate.traits.includes('mangled') || candidate.traits.includes('deaf') || candidate.traits.includes('blind') || candidate.traits.includes('mute') || candidate.traits.includes('stutter')) {
                generatedCharacterId = undefined;
            }
        }
        const generatedCharacterWithBonuses = E.addBonusesToCandidate(characterId, generatedCharacterId);
        return generatedCharacterWithBonuses;
    },
    calculateValueOfCandidate: (E, c) => {
        let value = E.randomStepValues([
            { chance: 35, value: 1.5 },
            { chance: 35, value: 1.25 },
            { chance: 20, value: 1 },
            { chance: 10, value: 0.75 }
        ]);

        const countSkills = (skills) => {
            return (parseFloat(skills.combat) + parseFloat(skills.eloquence) + parseFloat(skills.intelligence) + parseFloat(skills.stewardship)).toFixed(2)
        };

        const skillSum = countSkills(c.skills);
        value *= (skillSum * 1000);

        if (c.traits.includes('genius')) value *= 2.5;
        if (c.traits.includes('strong')) value *= 2.25;
        if (c.traits.includes('attractive')) value *= 2;

        return Math.max(20000, E.randomWithMeanAndStdDev(value, value * 0.1));
    },
    generateMatches: (E, characterId, num) => {
        const results = [];
        while (results.length < num) {
            const c = E.generateMatch(characterId);
            if (c) results.push(c);
        }
        return results;
    },
    addWife: (E, context) => {
        daapi.performMarriage({ characterId: context.characterId, spouseId: context.spouseId })
        const candidates = context.candidates;
        candidates.forEach((c) => {
            if (c.id !== context.spouseId) {
                daapi.kill({
                    characterId: c.id
                });
            }
        });
    },
    getAdjectiveFromNumber: (E, num) => {
        const adjectiveMap = {
            high: ['very', 'highly', 'decidedly', 'very much', 'really', 'greatly'],
            veryHigh: ['exceptionally', 'extremely', 'remarkably', 'immensly', 'strikingly'],
            highest: ['unbelievably', 'insanely', 'profoundly', 'supremely']
        };
        if (num >= 25) {
            return E.randomFromArray(adjectiveMap.highest);
        } else if (num >= 20) {
            return E.randomFromArray(adjectiveMap.veryHigh);
        } else if (num >= 15) {
            return E.randomFromArray(adjectiveMap.high);
        }
    },
    generateDescription: (E, c) => {
        let description;
        const standoutTraits = [];

        if (c.skills.intelligence >= 15)
            standoutTraits.push(E.getAdjectiveFromNumber(c.skills.intelligence) + ' intelligent');
        if (c.skills.eloquent >= 15)
            standoutTraits.push(E.getAdjectiveFromNumber(c.skills.eloquent) + ' eloquent');
        if (c.skills.combat >= 15)
            standoutTraits.push(E.getAdjectiveFromNumber(c.skills.combat) + ' skilled warrior');
        if (c.skills.stewardship >= 15)
            standoutTraits.push(E.getAdjectiveFromNumber(c.skills.stewardship) + ' responsible');
        if (c.traits.includes('genius'))
            standoutTraits.push('a genius');
        if (c.traits.includes('strong'))
            standoutTraits.push(E.getAdjectiveFromNumber(25) + ' strong');
        if (c.traits.includes('attractive'))
            standoutTraits.push(E.getAdjectiveFromNumber(20) + ' beautiful');

        if (standoutTraits.length >= 2) {
            let lastItem = standoutTraits.pop();
            return standoutTraits.join(', ') + ', and ' + lastItem;
        } else if (standoutTraits.length == 1) {
            return standoutTraits[0];
        } else {
            return "unremarkable";
        }
    },
    removeCandidates: (E, context) => {
        const candidates = context.candidates;
        candidates.forEach((c) => {
            daapi.kill({
                characterId: c.id
            });
        });
    },
    seeMatchmakingOffers: (E, context) => {
        const characterId = context.characterId;
        const potentialMatches = E.generateMatches(characterId, E.generateRandomIntegerBetween(3, 6));
        const countSkills = (skills) => {
            return (parseFloat(skills.combat) + parseFloat(skills.eloquence) + parseFloat(skills.intelligence) + parseFloat(skills.stewardship)).toFixed(2)
        };
        const options = [];
        potentialMatches.forEach((c) => {
            const skillSum = countSkills(c.skills);
            const fuzzFactor = 0.25;
            const skillEstimate = parseFloat(E.randomWithMeanAndStdDev(skillSum, skillSum * fuzzFactor) / 4).toFixed(2);
            const age = parseFloat(daapi.calculateAge({ month: c.birthMonth, year: c.birthYear })).toFixed(2);
            const value = E.calculateValueOfCandidate(c);
            const description = E.generateDescription(c);
            options.push({
                text: `The matchmaker presents, ${c.praenomen}. She's ${age} years old with average skill of around ${skillEstimate}. The matchmaker describes her as: ${description}.`,
                tooltip: `Pay the fee of: ${value}`,
                statChanges: {
                    cash: parseFloat((value / daapi.calculateScaleByClassFactor()) * -1).toFixed(2)
                },
                action: E.thisModuleProcessor('addWife', {
                    characterId: characterId,
                    spouseId: c.id,
                    candidates: potentialMatches
                })
            });
        });
        options.push({
            text: 'Nevermind.',
            tooltip: "Nevermind.",
            action: E.thisModuleProcessor('removeCandidates', {
                candidates: potentialMatches
            })
        });

        // console.log('potential matches', potentialMatches);
        daapi.pushInteractionModalQueue({
            title: 'Matchmaker',
            message: 'The match maker demands a hefty fee before you can hear about the daughters of freed men and houses that have fallen out of Rome\'s favor. Will you pay?',
            options: options
        });
    },
    runCoemptioIcon: (E, context) => {
        const characterId = context.characterId;
        const modState = E.getModState();
        modState.iconData = modState.iconData || [];

        const cost = Math.max(20000, daapi.getState().current.cash * 0.05);
        daapi.pushInteractionModalQueue({
            title: 'Matchmaker',
            message: 'The match maker demands a hefty fee before you can hear about the daughters of freed men and houses that have fallen out of Rome\'s favor. Will you pay?',
            options: [{
                text: 'Pay the fee.',
                tooltip: 'Pay the fee of: ' + cost,
                statChanges: {
                    cash: (cost / daapi.calculateScaleByClassFactor()) * -1
                },
                action: E.thisModuleProcessor('seeMatchmakingOffers', {
                    characterId: characterId
                })
            }, {
                text: 'Nevermind.',
                tooltip: 'Nevermind.'
            }]
        });
        modState.iconData.forEach((cId) => {
            daapi.deleteCharacterAction({
                characterId: cId,
                key: cId
            });
        });
        modState.iconData = [];
        E.saveModState(modState);
    },
    thisModuleProcessor: (E, method, context) => {
        return {
            event: '/coemptio/app/appMethods',
            method: 'genericProcessorHandler',
            context: Object.assign({ method: method, E: E }, context)
        }
    },
    updateCharacterActionIcons: (E) => {
        const modState = E.getModState();
        modState.iconData = modState.iconData || [];

        const marriagableMaleChildren = E.filterHouseCharacters(null, (c) => {
            // alive?
            if (c.isDead) return false;

            // check gender
            if (!c.isMale) return false;

            // check age
            let age = daapi.calculateAge({ month: c.birthMonth, year: c.birthYear, day: c.birthDay });
            if (age < 12) return false;

            // check married?
            if (c.spouseId && !daapi.getCharacter({
                    characterId: c.spouseId
                }).isDead) return false;

            return c;
        });
        modState.iconData.forEach((cId) => {
            daapi.deleteCharacterAction({
                characterId: cId,
                key: 'coemptio' + cId
            });
        });
        modState.iconData = [];

        console.log(marriagableMaleChildren);
        marriagableMaleChildren.forEach((c) => {
            E.addIconToCharacter(c);
            modState.iconData.push(c.id);
        });
        E.saveModState(modState);
    }
}