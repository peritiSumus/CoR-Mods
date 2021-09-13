{
    methods: {
        genericProcessorHandler: (context) => {
            context.E[context.method](context);
        },
        globalCheatEntry: (context) => {
            const E = context.E;

            daapi.pushInteractionModalQueue({
                title: 'Which Cheat?',
                message: 'Choose from the following cheater options:',
                options: [{
                    text: 'Modify Cash',
                    tooltip: 'Modify Cash',
                    action: E.thisModuleProcessor('modifyCash', {})
                }, {
                    text: 'Modify Prestige',
                    tooltip: 'Modify Prestige',
                    action: E.thisModuleProcessor('modifyPrestige', {})
                }, {
                    text: 'Modify Influence',
                    tooltip: 'Modify Influence',
                    action: E.thisModuleProcessor('modifyInfluence', {})
                }, {
                    text: 'Nevermind.',
                    tooltip: 'Nevermind.'
                }]
            });
        },
        setStat: ({ input, index }) => {
            const context = input.onChange.context;
            const newValue = parseFloat(input.value);
            const cId = context.characterId;
            const ch = daapi.getCharacter({ characterId: cId });
            const stat = context.stat;
            const skills = {};
            skills[stat] = newValue;
            daapi.updateCharacter({
                characterId: cId,
                character: {
                    skills: skills
                }
            });
        },
        setCash: ({ input, index }) => {
            let newValue = parseFloat(input.value);
            newValue = (!isNaN(newValue) && isFinite(newValue)) ? newValue : 0;

            const newState = JSON.parse(window.localStorage.mainStore);
            newState.current.cash = newValue;
            window.localStorage.mainStore = JSON.stringify(newState);
            window.location.reload();
        },
        setInfluence: ({ input, index }) => {
            let newValue = parseFloat(input.value);
            newValue = (!isNaN(newValue) && isFinite(newValue)) ? newValue : 0;

            const newState = JSON.parse(window.localStorage.mainStore);
            newState.current.influence = newValue;
            window.localStorage.mainStore = JSON.stringify(newState);
            window.location.reload();
        },
        setPrestige: ({ input, index }) => {
            let newValue = parseFloat(input.value);
            newValue = (!isNaN(newValue) && isFinite(newValue)) ? newValue : 0;

            const newState = JSON.parse(window.localStorage.mainStore);
            newState.dynasties[newState.current.id].prestige = newValue;
            window.localStorage.mainStore = JSON.stringify(newState);
            window.location.reload();
        }
    },
    getModState: (E) => {
        return daapi.getGlobalFlag({
            flag: 'fraus_mod_state'
        }) || {};
    },
    saveModState: (E, stateData) => {
        daapi.setGlobalFlag({
            flag: 'fraus_mod_state',
            data: stateData
        });
    },
    addIconToCharacter: (E, c) => {
        daapi.addCharacterAction({
            characterId: c.id,
            key: c.id,
            action: {
                title: 'Cheats for this character',
                icon: daapi.requireImage('/fraus/assets/repair.svg'),
                isAvailable: true,
                hideWhenBusy: false,
                process: E.thisModuleProcessor('runFrausIcon', {
                    characterId: c.id
                })
            }
        });
    },
    runFrausIcon: (E, context) => {
        const characterId = context.characterId;
        const modState = E.getModState();
        modState.iconData = modState.iconData || [];

        daapi.pushInteractionModalQueue({
            title: 'Which Cheat?',
            message: 'Choose from the following cheater options:',
            options: [{
                text: 'Nevermind.',
                tooltip: 'Nevermind.'
            }, {
                text: 'Modify Base Stats',
                tooltip: 'Modify Base Stats',
                action: E.thisModuleProcessor('chooseStatToModify', {
                    characterId: characterId
                })
            }, {
                text: 'Add Trait',
                tooltip: 'Add Trait',
                action: E.thisModuleProcessor('chooseTraitToAdd', {
                    characterId: characterId
                })
            }, {
                text: 'Remove Trait',
                tooltip: 'Remove Trait',
                action: E.thisModuleProcessor('chooseTraitToRemove', {
                    characterId: characterId
                })
            }, {
                text: 'Remove Maladies',
                tooltip: 'Remove Maladies',
                action: E.thisModuleProcessor('removeAllMaladies', {
                    characterId: characterId
                })
            }, {
                text: 'Impregnate',
                tooltip: 'Impregnate',
                action: E.thisModuleProcessor('impregnate', {
                    characterId: characterId
                })
            }, {
                text: 'Abort',
                tooltip: 'Abort',
                action: E.thisModuleProcessor('abort', {
                    characterId: characterId
                })
            }, {
                text: 'Change Father to Current Character',
                tooltip: 'Change Father',
                action: E.thisModuleProcessor('changeFather', {
                    characterId: characterId
                })
            }, {
                text: 'Leave War',
                tooltip: 'Leave War',
                action: E.thisModuleProcessor('leaveWar', {
                    characterId: characterId
                })
            }, {
                text: 'Join War',
                tooltip: 'Join War',
                action: E.thisModuleProcessor('joinWar', {
                    characterId: characterId
                })
            }, {
                text: 'Kill',
                tooltip: 'Kill',
                action: E.thisModuleProcessor('kill', {
                    characterId: characterId
                })
            }, {
                text: 'Play As',
                tooltip: 'Play As',
                action: E.thisModuleProcessor('playAs', {
                    characterId: characterId
                })
            }, {
                text: 'Nevermind.',
                tooltip: 'Nevermind.'
            }]
        });
    },
    removeAllMaladies: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.getCharacter({ characterId: cId });

        const maladies = ["weak", "deformed", "ugly", "deformed", "accidentDeformed", "dimwit", "stress", "highlyStress", "depression", "cripplingDepression", "illness", "malnourished", "extremelyMalnourished", "fat", "mangled", "severelyMangled", "stutter", "mute", "deaf", "blind", "wounded", "greviouslyWounded", "alcoholic", "oneHand", "noThumb", "oneLeg", "noHand", "noLeg", "disfigured", "oneEyed", "disqualifiedLudi", "deserter", "barredFromSenate"];
        maladies.forEach((m) => {
            if (ch.traits.includes(m)) {
                daapi.removeTrait({
                    characterId: cId,
                    trait: m
                });
            }
        });
        daapi.updateCharacter({
            characterId: cId
        });
    },
    playAs: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.setCurrentCharacter({ characterId: cId });
    },
    kill: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.kill({ characterId: cId });
    },
    joinWar: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.joinWar({ characterId: cId });
    },
    leaveWar: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.leaveWar({ characterId: cId });
    },
    abort: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.getCharacter({ characterId: cId });
        daapi.updateCharacter({
            characterId: cId,
            character: {
                startedPregnancyTime: false
            }
        });
    },
    changeFather: (E, context) => {
        const cId = context.characterId;
        // const ch = daapi.getCharacter({ characterId: cId });
        daapi.updateCharacter({
            characterId: cId,
            character: {
                startedPregnancyTime: {
                    fatherId: daapi.getState().id
                }
            }
        });
    },
    impregnate: (E, context) => {
        const cId = context.characterId;
        // const ch = daapi.getCharacter({ characterId: cId });
        daapi.impregnate({ characterId: cId });
    },
    modifyCash: (E, context) => {
        daapi.pushInteractionModalQueue({
            title: 'What is the new value for cash?',
            message: 'Enter the new value below, must be a number:',
            inputs: [{
                type: 'text',
                title: 'Value',
                value: daapi.getState().current.cash,
                onChange: {
                    event: '/fraus/app/appMethods',
                    method: 'setCash'
                }
            }]
        });
    },
    modifyInfluence: (E, context) => {
        daapi.pushInteractionModalQueue({
            title: 'What is the new value for influence?',
            message: 'Enter the new value below, must be a number:',
            inputs: [{
                type: 'text',
                title: 'Value',
                value: daapi.getState().current.influence,
                onChange: {
                    event: '/fraus/app/appMethods',
                    method: 'setInfluence'
                }
            }]
        });
    },
    modifyPrestige: (E, context) => {
        const state = daapi.getState();
        daapi.pushInteractionModalQueue({
            title: 'What is the new value for prestige?',
            message: 'Enter the new value below, must be a number:',
            inputs: [{
                type: 'text',
                title: 'Value',
                value: state.dynasties[state.current.id].prestige,
                onChange: {
                    event: '/fraus/app/appMethods',
                    method: 'setPrestige'
                }
            }]
        });
    },
    chooseTraitToRemove: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.getCharacter({ characterId: cId });

        const traitOptions = [{
            text: 'Nevermind.',
            tooltip: 'Nevermind.'
        }];
        ch.traits.forEach((t) => {
            traitOptions.push({
                text: t,
                tooltip: t,
                action: E.thisModuleProcessor('removeTrait', {
                    characterId: cId,
                    trait: t
                })
            });
        })
        daapi.pushInteractionModalQueue({
            title: 'Remove Which Trait?',
            message: 'Choose from the following traits:',
            options: traitOptions
        });
    },
    removeTrait: (E, context) => {
        daapi.removeTrait({
            characterId: context.characterId,
            trait: context.trait
        });
        daapi.updateCharacter({
            characterId: context.characterId
        });
    },
    addTrait: (E, context) => {
        daapi.addTrait({
            characterId: context.characterId,
            trait: context.trait
        });
        daapi.updateCharacter({
            characterId: context.characterId
        });
    },
    chooseTraitToAdd: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.getCharacter({ characterId: cId });
        const traits = ['literate', 'educated', 'oratorDeliberative', 'oratorJudicial', 'philosopher', 'horseRider', 'charioteer', 'gladiator', 'wrestler', 'veteran', 'novusHomo', 'strong', 'weak', 'dwarf', 'giant', 'attractive', 'ugly', 'deformed', 'accidentDeformed', 'dimwit', 'genius', 'stress', 'highlyStress', 'depression', 'cripplingDepression', 'illness', 'malnourished', 'extremelyMalnourished', 'fat', 'morbidlyFat', 'mangled', 'severelyMangled', 'stutter', 'mute', 'deaf', 'blind', 'wounded', 'greviouslyWounded', 'alcoholic', 'oneHand', 'noThumb', 'oneLeg', 'noHand', 'noLeg', 'disfigured', 'oneEyed', 'sapphic', 'achillean', 'ace', 'effeminatus', 'taurian', 'fisherMan', 'marksMan', 'formerMagistrate', 'formerPlebianTribune', 'senator', 'authoritative', 'greedy', 'shy', 'erudite', 'fashionable', 'stubborn', 'rude', 'honorable', 'competitive', 'charitable', 'sly', 'trusting', 'paranoid', 'gregarious', 'ambitious', 'content', 'lunatic', 'mystic', 'coronaCastrensis', 'coronaCivica', 'coronaObsidimalis', 'coronaTriumphalis', 'coronaMuralis', 'coronaRostrata', 'disqualifiedLudi', 'deserter', 'barredFromSenate'];
        const traitOptions = [{
            text: 'Nevermind.',
            tooltip: 'Nevermind.'
        }];
        traits.forEach((t) => {
            traitOptions.push({
                text: t,
                tooltip: t,
                action: E.thisModuleProcessor('addTrait', {
                    characterId: cId,
                    trait: t
                })
            });
        });
        daapi.pushInteractionModalQueue({
            title: 'Add Which Trait?',
            message: 'Choose from the following traits:',
            options: traitOptions
        });
    },
    chooseStatToModify: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.getCharacter({ characterId: cId });
        const stats = ['intelligence', 'stewardship', 'eloquence', 'combat'];
        const traitOptions = [{
            text: 'Nevermind.',
            tooltip: 'Nevermind.'
        }];
        stats.forEach((t) => {
            traitOptions.push({
                text: t,
                tooltip: t,
                action: E.thisModuleProcessor('modifyStat', {
                    characterId: cId,
                    stat: t
                })
            });
        });
        daapi.pushInteractionModalQueue({
            title: 'Modify Which Stat?',
            message: 'Choose from the following stats:',
            options: traitOptions
        });
    },
    modifyStat: (E, context) => {
        const cId = context.characterId;
        const ch = daapi.getCharacter({ characterId: cId });
        const stat = context.stat;

        daapi.pushInteractionModalQueue({
            title: 'What is the new value for this stat??',
            message: 'Enter the new value below, must be a number:',
            inputs: [{
                type: 'text',
                title: 'Value',
                value: ch.skills[stat],
                onChange: {
                    event: '/fraus/app/appMethods',
                    method: 'setStat',
                    context: {
                        characterId: cId,
                        stat: context.stat,
                    }
                }
            }]
        });
    },
    thisModuleProcessor: (E, method, context) => {
        return {
            event: '/fraus/app/appMethods',
            method: 'genericProcessorHandler',
            context: Object.assign({ method: method, E: E }, context)
        }
    },
    updateCharacterActionIcons: (E) => {
        const modState = E.getModState();
        modState.iconData = modState.iconData || [];

        const everyoneInTheHouse = E.filterHouseCharacters(null, (c) => {
            return c.isDead ? false : c;
        });
        modState.iconData.forEach((cId) => {
            daapi.deleteCharacterAction({
                characterId: cId,
                key: cId
            });
        });
        modState.iconData = [];

        everyoneInTheHouse.forEach((c) => {
            E.addIconToCharacter(c);
            modState.iconData.push(c.id);
        });
        E.saveModState(modState);
    }
}