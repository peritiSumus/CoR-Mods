{
    canTriggerIfUnavailable: true,
    checkType: 'general',

    /* application code */
    _dataFlagName: "household_slaves",
    _assetPath: "/household_slaves/assets/",
    _eventPath: "/household_slaves/events/",
    _generateRandomIntegerBetween: (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    _generateSlaveName: () => {
        const names = ["Ada", "Adalberht", "Adalbern", "Adalbert", "Adalfarus", "Adalfuns", "Adalgard", "Adalhard", "Adalheidis", "Adallindis", "Adalwin", "Adalwolf", "Adela", "Adelais", "Adelina", "Adelmar", "Adolf", "Adolphus", "Æbbe", "Ælfflæd", "Ælfgar", "Ælfgifu", "Ælfheah", "Ælfnoð", "Ælfræd", "Ælfric", "Ælfsige", "Ælfstan", "Ælfswiþ", "Ælfþryð", "Ælfthryth", "Ælfweard", "Ælfwig", "Ælfwine", "Ælred", "Aenor", "Æsc", "Æþelbeorht", "Æðelberht", "Æðelflæd", "Æthelflæd", "Æðelfrið", "Æðelmær", "Æthelnoð", "Æðelræd", "Æþelræd", "Æthelred", "Æðelric", "Æthelric", "Æðelstan", "Æthelstan", "Æðelþryð", "Æthelthryth", "Æthelweard", "Æðelwine", "Æthelwine", "Aghi", "Agi", "Agilmar", "Agilulf", "Agmundr", "Agnarr", "Áki", "Alard", "Alaric", "Alba (3)", "Alberich", "Albert", "Albertus", "Alboin", "Alda (1)", "Aldebrand", "Aldegar", "Aldegund", "Aldhard", "Aldo", "Aldric", "Aldwin", "Áleifr", "Alfarr", "Alfbern", "Alfhard", "Alfher", "Alfhildr", "Alfons", "Alfvin", "Alfwin", "Algautr", "Alia (2)", "Aliprand", "Allovera", "Alodia", "Álǫf", "Altwidus", "Alwin", "Amalasuintha", "Amalbert", "Amalia", "Amalric", "Amelia", "Amelina", "Andebert", "Angilberct", "Ansehelm", "Anselm", "Ansgar", "Ansigar", "Anso", "Ansobert", "Ansovald", "Anthelm", "Anzo", "Archembald", "Ari (2)", "Arminius", "Arnbjǫrg", "Arnfinnr", "Árni", "Arnifrid", "Arnold", "Arnórr", "Arnþórr", "Arnulf", "Arnviðr", "Ása", "Ásbjǫrn", "Ascelin", "Asco", "Ásdís", "Ásgeirr", "Áshildr", "Ásketill", "Áslaug", "Ásmundr", "Ásta", "Ástríðr", "Ásvaldr", "Aðalsteinn", "Athanaric", "Athaulf", "Auda", "Audamar", "Audo", "Audovacar", "Auðr", "Auðrhildr", "Ava (3)", "Avelina", "Aveza", "Avila", "Bada", "Badulf", "Badurad", "Baggi", "Baldarich", "Baldo", "Baldomar", "Baldovin", "Baldwin", "Bárðr", "Baugulf", "Beorhtric", "Beorhtsige", "Beornræd", "Berahthraban", "Berahthram", "Berard", "Berengar", "Berengaria", "Bergljót", "Berhta", "Berhtoald", "Berinhard", "Bernard", "Bernhard", "Bertha", "Bertilo", "Bertram", "Bertrand", "Birgir", "Bjarni", "Bjartr", "Bjǫrg", "Bjǫrn", "Blanchard", "Boda", "Borghildr", "Bóthildr", "Brando", "Brandr", "Bróðir", "Brunhild", "Brunihild", "Bruno", "Brynhildr", "Brynja", "Brynjarr", "Búi", "Burchard", "Burkhard", "Burkhart", "Carlman", "Carloman", "Carolina", "Carolus", "Ceadda", "Cenhelm", "Cenric", "Ceolmund", "Cerdic", "Chariovalda", "Chlodochar", "Chlodovech", "Chlodulf", "Chlothar", "Chlotichilda", "Clodovicus", "Clothildis", "Clovis", "Cola", "Colobert", "Conrad", "Cunigund", "Cuthberht", "Cynebald", "Cyneburg", "Cyneburga", "Cynefrith", "Cynefrið", "Cyneheard", "Cynemær", "Cyneric", "Cynesige", "Cyneweard", "Dagfinnr", "Dagmær", "Dagný", "Dagr", "Dagrún", "Danr", "Deorwine", "Dudda", "Dunstan", "Eadberht", "Eadburg", "Eadburga", "Eadgar", "Eadgyð", "Eadmund", "Eadric", "Eadwald", "Eadweard", "Eadwig", "Eadwine", "Eadwulf", "Ealdgyð", "Ealdræd", "Ealdwine", "Ealhhere", "Ealhstan", "Eardwulf", "Eastmund", "Eberhard", "Eburwin", "Ecgberht", "Edda (2)", "Egilhard", "Egill", "Egino", "Eileifr", "Einarr", "Eindriði", "Eiríkr", "Ekkebert", "Ekkehard", "Ellanher", "Emelrich", "Emma", "Emmerich", "Engel", "Engelbert", "Engilram", "Eoforhild", "Eoforwine", "Ercanbald", "Erhard", "Erlendr", "Erlingr", "Ermendrud", "Ermenrich", "Ermingard", "Erminhilt", "Erminigild", "Erminlinda", "Ernust", "Erwin", "Ewald", "Eydís", "Eysteinn", "Eyvindr", "Faramund", "Farohildis", "Farvald", "Félagi", "Ferdinand", "Filibert", "Finnr", "Flæmingr", "Folcher", "Fólki", "Franco (1)", "Fredenand", "Frida", "Fridenot", "Friduhelm", "Friduman", "Fridumar", "Friduric", "Fridwald", "Fríða", "Friðþjófr", "Friðuswiþ", "Fróði", "Fulbert", "Fulco", "Gasto", "Gaufrid", "Gautbert", "Gauti", "Gautselin", "Gautstafr", "Gautvin", "Gebahard", "Gebhard", "Geirr", "Genovefa", "Gerbern", "Gerbold", "Geretrudis", "Gerfrid", "Gerhard", "Gerhild", "Gerlach", "Gerlind", "Germund", "Gernot", "Gero", "Gerold", "Gertrud", "Gerulf", "Gervas", "Gervasius", "Gilbert", "Giltbert", "Gisbert", "Giselbert", "Giselmund", "Gisila", "Gisilbert", "Gisilfrid", "Gislenus", "Gislin", "Gismund", "Glædwine", "Goda (1)", "Godabert", "Godafrid", "Godascalc", "Godehard", "Godeliva", "Godgifu", "Godiva", "Godric", "Godwine", "Goma", "Goteleib", "Gozzo", "Grímhildr", "Grimhilt", "Grimwald", "Gulbrandr", "Gulla", "Gumarich", "Gunda", "Gundahar", "Gundhram", "Gundisalvus", "Gunna", "Gunnarr", "Gunnbjǫrg", "Gunnhildr", "Gunni", "Gunnvaldr", "Gunnvǫr", "Guðbrandr", "Guðfriðr", "Guðini", "Guðlaug", "Guðleif", "Guðleifr", "Guðmundr", "Guðríðr", "Guðrún", "Gyða", "Hadewidis", "Hadewig", "Hadubert", "Hadufuns", "Hagano", "Hailwic", "Haimo", "Hákon", "Hálfdan", "Hallbjǫrn", "Halli", "Hallr", "Hallsteinn", "Hallþóra", "Hallþórr", "Hallvarðr", "Haraldr", "Hardman", "Hardmod", "Harduwich", "Hardwin", "Haribert", "Hariman", "Hariwald", "Hariwini", "Hartmut", "Hartwig", "Hartwin", "Hávarðr", "Heard", "Heidrich", "Heimirich", "Heinrich", "Helewidis", "Helga", "Helgi", "Helmfrid", "Helmo", "Helmold", "Helmut", "Hemingr", "Hengist", "Henricus", "Hereward", "Hereweald", "Herleifr", "Herleva", "Herman", "Hermanus", "Hild", "Hilda", "Hildebrand", "Hildefons", "Hildegard", "Hildiberht", "Hildigardis", "Hildimar", "Hildingr", "Hilditrut", "Hildiwara", "Hildr", "Hildræd", "Hjálmarr", "Hjǫrdís", "Hlíf", "Hludowig", "Hólmgeirr", "Horsa", "Hrafn", "Hrafnhildr", "Hreiðarr", "Hreiðunn", "Hróaldr", "Hróarr", "Hrodebert", "Hroderich", "Hrodger", "Hrodland", "Hrodohaidis", "Hrodpreht", "Hrodulf", "Hrœrekr", "Hrolf", "Hrólfr", "Hroðgar", "Hrothgar", "Hróðgeirr", "Hróðólfr", "Hroðulf", "Hrothulf", "Hróðvaldr", "Hrotsuitha", "Hruodnand", "Hubert", "Hubertus", "Hughard", "Hugleikr", "Hugo", "Hugubert", "Huguo", "Hulderic", "Humbert", "Hunberct", "Hunfrid", "Ida", "Idalia", "Ima", "Inga", "Ingeburg", "Ingi", "Ingibjǫrg", "Ingigerðr", "Ingimárr", "Ingo", "Ingólfr", "Ingomar", "Ingríðr", "Ingulf", "Ingunn", "Ingvildr", "Irma", "Isa (3)", "Isbrand", "Ishild", "Iðunn", "Ívarr", "Ivo (1)", "Jarl", "Jordanes", "Jórunnr", "Jósteinn", "Judda", "Kálfr", "Kári", "Karl", "Katla", "Ketill", "Ketilriðr", "Knútr", "Kóri", "Kunibert", "Kuno", "Lambert", "Lamprecht", "Landebert", "Landulf", "Lanzo", "Leifr", "Leobwin", "Leofdæg", "Leofflæd", "Leofgyð", "Leofric", "Leofsige", "Leofstan", "Leofwine", "Leonard", "Leudagar", "Leudbald", "Leudoberct", "Leutgard", "Leuthar", "Leutwin", "Linda", "Linza", "Liupold", "Lothar", "Ludolf", "Ludovicus", "Luitgard", "Lutgardis", "Magnhildr", "Magni", "Mahthildis", "Managold", "Manno", "Mathilda", "Meginfrid", "Meginhard", "Meginrat", "Meino", "Meinrad", "Mildburg", "Mildgyð", "Mildþryð", "Milo", "Mundi", "Myrgjǫl", "Njáll", "Norbert", "Norman", "Oda", "Odalric", "Oddbjǫrn", "Oddr", "Oddvarr", "Odila", "Odilia", "Odilo", "Odo", "Odoacer", "Odovacar", "Ólaug", "Ǫlvir", "Ortrun", "Ortwin", "Osbeorn", "Osberht", "Osgar", "Osmund", "Oswald", "Oswine", "Othmar", "Otmar", "Otto", "Pæga", "Pharaildis", "Pipin", "Pippin (1)", "Raban", "Radobod", "Radulf", "Raganhar", "Raganhildis", "Ragemprand", "Raginald", "Raginhard", "Raginmar", "Raginmund", "Ragna", "Ragnarr", "Ragnbjǫrg", "Ragnfríðr", "Ragnheiðr", "Ragnhildr", "Ragnvaldr", "Raimund", "Rainard", "Rainer", "Rambert", "Ramirus", "Randulf", "Randúlfr", "Ráðúlfr", "Regin", "Reinald", "Reiner", "Reinhard", "Reinhold", "Richard", "Ricmod", "Ricohard", "Robert", "Rocco", "Rochus", "Romilda", "Romuald", "Roslindis", "Rosmunda", "Rothaid", "Roza (2)", "Rudesind", "Rúna", "Rúni", "Sæwine", "Saldís", "Saxa", "Sigdag", "Sigeberht", "Sigeweard", "Sigfrøðr", "Sigibert", "Sigifrid", "Sigihard", "Sigiheri", "Sigihild", "Sigilind", "Sigimar", "Sigimund", "Sigismund", "Sigivald", "Sigiward", "Sigmundr", "Signý", "Sigríðr", "Sigrún", "Sigsteinn", "Sigurðr", "Sindri", "Siward", "Snorri", "Sólveig", "Stáli", "Steinarr", "Steingrímr", "Steinn", "Steinunn", "Stígandr", "Stigr", "Stithulf", "Suerius", "Sumarliði", "Sundri", "Suni", "Sunngifu", "Svanhildr", "Svantepolk", "Sveinn", "Sverrir", "Swanahilda", "Swiðhun", "Tata", "Thancmar", "Thankarat", "Theobald", "Theoderich", "Theodoar", "Theodoard", "Theodoricus", "Theothelm", "Theotleip", "Theotman", "Theudelinda", "Theudemar", "Theudhar", "Theudobald", "Theudofrid", "Theudoricus", "Theutrich", "Thiemo", "Thietmar", "Þiudreiks", "Þone", "Þóra", "Þórarinn", "Þórbjǫrg", "Þórbjǫrn", "Þórdís", "Þórfastr", "Þórfreðr", "Þórfríðr", "Þórgeirr", "Þórgísl", "Þórgnýr", "Þórhildr", "Þórir", "Þórketill", "Þórleifr", "Þórleikr", "Þórmóðr", "Þórný", "Þórsteinn", "Þórunn", "Þórvaldr", "Þórveig", "Þórví", "Þróndr", "Thrud", "Þrúðr", "Þýri", "Tófa", "Tófi", "Tóki", "Tryggvi", "Uhtric", "Úlfr", "Ulrich", "Uni", "Unnr", "Valdimárr", "Valdís", "Végarðr", "Veremund", "Vetrliði", "Vígdís", "Vígi", "Víkingr", "Vragi", "Vulferam", "Vulfgang", "Walahfrid", "Walchelin", "Waldeburg", "Waldedrudis", "Waldhar", "Waldo", "Waldobert", "Waldomar", "Walhberct", "Walherich", "Walter", "Walther", "Wandal", "Wandalin", "Waramunt", "Warin", "Warinhari", "Wassa", "Wazo", "Wealdmær", "Wealhmær", "Wemba", "Wendelin", "Werdheri", "Widald", "Wido", "Widogast", "Widukind", "Wigand", "Wigberht", "Wigbrand", "Wigburg", "Wigheard", "Wigmar", "Wigmund", "Wigstan", "Wilburg", "Wilburh", "Wilfrith", "Wilfrið", "Wilheard", "Wilhelm", "Willabert", "Willahelm", "Willamar", "Willibald", "Willidrud", "Willifrid", "Willihad", "Willihard", "Williric", "Wilmǣr", "Wina", "Wine", "Winfrith", "Winfrið", "Winifrid", "Witold", "Wolf", "Wolfgang", "Wulfgifu", "Wulfnoð", "Wulfric", "Wulfrun", "Wulfsige", "Wulfstan", "Wynnstan", "Yngvarr", "Yngvildr", "Ameqran", "Idir", "Itri", "Izem", "Kahina", "Tajeddigt", "Tidir", "Tifawt", "Titrit", "Ahmose", "Akhenaten", "Akhenaton", "Amenemhat", "Amenemhet", "Amenhotep", "Amosis", "Cheops", "Djehutimesu", "Djehutimose", "Hatshepsut", "Iahmesu", "Imhotep", "Khafra", "Khnum-khufu", "Khufu", "Menes", "Meresankh", "Meritites", "Neferkare", "Nefertari", "Nefertiti", "Paphnoutios", "Paphnutius", "Rameses", "Ramesses", "Ramessu", "Ramses", "Rhamesses", "Seti", "Thutmose", "Touthmosis", "Tutankhamon"];
        return names[Math.floor(Math.random() * names.length)];
    },
    _generateRandomType: () => {
        const types = ["educator", "doctor", "entertainer", "manager", "warrior"];
        return types[Math.floor(Math.random() * types.length)];
    },
    _slaveToString: (slave) => {
        const lines = [`Name: ${slave.name}`, `Age: ${slave.age}`];
        for (const key in slave.modifiers ) {
            const modifier = slave.modifiers[key]
            lines.push(`${key}: ${modifier.factor}`);
        }
        for (const skill in slave.skills) {
            const value = slave.skills[skill];
            lines.push(`${skill}: ${value}`);
        }                
        return lines.join(", ");
    },
    _generateRandomSlave: () => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        let newSlave = {
            characterId: daapi.getState().current.id,
            key: E.uuid(),
            name: E.generateSlaveName(),
            level: E.generateRandomIntegerBetween(1, 6),
            type: E.generateRandomType(),
            age: E.generateRandomIntegerBetween(16, 40),
            timeAtThisLevel: 0
        };

        newSlave = E.addRandomInitialBonuses(newSlave);
        return newSlave;
    },
    _randomStepValues: (steps)=>{
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        let value, defaultValue, past=0, r = E.generateRandomIntegerBetween(1, 100);
        const valueFromItem = (item) => {
            if (item.value)
                return item.value;

            if (item.min && item.max) 
                return E.generateRandomIntegerBetween(item.min, item.max);

            throw new Error("Invalid item");
        };
        steps.sort((a,b)=>{
            return b.chance - a.chance;
        }).forEach((item)=>{
            if (value) return;
            if (item.chance == 0) {
                defaultValue = valueFromItem(item);
            } else if (r <= (item.chance + past)) {
                value=valueFromItem(item);
            }
            past += item.chance;
        });
        return value || defaultValue || -1;
    },
    _addRandomInitialBonuses: (slave) => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        slave.modifiers = slave.modifiers || {};
        slave.skills = slave.skills || {};

        let factor;
        switch (slave.type) {
            case 'educator':
                break;
            case 'doctor':
                factor = E.generateRandomIntegerBetween(2, Math.max(2,E.randomStepValues([
                    {chance: 0, value: 2},
                    {chance: 60, value: 2},
                    {chance: 30, value: 3},
                    {chance: 10, value: 5}
                ])));
                slave.modifiers.household_fertility = {
                    factor: factor * Math.max(1, (slave.level / 5)),
                    id: E.uuid()
                };
                factor = E.generateRandomIntegerBetween(2, Math.max(2,E.randomStepValues([
                    {chance: 0, value: 2},
                    {chance: 60, value: 2},
                    {chance: 30, value: 3},
                    {chance: 10, value: 5}
                ])));
                slave.modifiers.household_health = {
                    factor: factor * Math.max(1, (slave.level / 5)),
                    id: E.uuid()
                };
                break;
            case 'entertainer':
                break;
            case 'manager':
                if (Math.random() > 0.5) {
                    factor = 1 + (Math.random() * (slave.level / 5));
                    slave.modifiers.revenue = {
                        factor: factor.toFixed(2),
                        id: E.uuid()
                    };    
                } else {
                    factor = E.generateRandomIntegerBetween(1,3) * (Math.max(1, slave.level / 5));
                    slave.skills.stewardship = factor.toFixed(2);
                }
                break;
            case 'warrior':
                factor = E.generateRandomIntegerBetween(2, Math.max(2,E.randomStepValues([
                    {chance: 0, value: 1},
                    {chance: 60, value: 2},
                    {chance: 30, value: 3},
                    {chance: 10, value: 5}
                ])));
                factor = factor * Math.max(1, (slave.level / 5));
                factor = Math.max(1, factor / 2);
                slave.modifiers.household_health = {
                    factor: factor.toFixed(2),
                    id: E.uuid()
                };
                break;
        }
        return slave;
    },        
    _getAppData: () => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        return (daapi.getGlobalFlag({flag: E.dataFlagName}) || []);
    },
    _saveAppData: (data = []) => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        return daapi.setGlobalFlag({flag: E.dataFlagName, data: data});
    },
    _set: (key, value) => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        if (key.slice(0,1) !== '_') key = ("_" + key);

        console.log("writing", key, value);
        daapi.modData.events[moduleName][key] = value;
    },
    _getSlaveByType: (type) => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);
        const slaves = E.getAppData();
        for (let i=0; i<slaves.length; i++) {
            if (slaves[i].type.toLowerCase() == type.toLowerCase())
                return slaves[i];
        }
        return null;
    },
    _pushInteractionModalQueue: (params) => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        daapi.invokeMethod({
            event: moduleName,
            method: "genericPushInteractionModalQueue",
            context: params
        });
    },
    _removeSlaveByKey: (key) => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);
        
        E.saveAppData(E.getAppData().filter((slave)=>{
            if (slave.key == key) {
                daapi.deleteCharacterAction({characterId: slave.characterId, key: slave.key});

                for (const key in slave.modifiers ) {
                    const modifier = slave.modifiers[key]
                    daapi.removeModifier({
                        key: key,
                        id: modifier.id
                    });
                }
                for (const skill in slave.skills) {
                    const value = slave.skills[skill];
                    E.addSkillToCharacter({
                        characterId: daapi.getState().current.id,
                        skill: skill,
                        value: -1 * value
                    });
                }

                return false;
            }
            return true;
        }));
        daapi.updateCharacter({});
    },
    _addSkillToCharacter: ({characterId, skill, value})=> {
        console.log('add skill', characterId, skill, value);
        const skillsValues = daapi.getCharacter({characterId}).skills;

        console.log('current skills', skillsValues);
        skillsValues[skill] = Number.parseFloat(skillsValues[skill]) + parseFloat(value);

        console.log('updated skills', skillsValues);
        daapi.updateCharacter({
            characterId: characterId,
            character: {
                skills: skillsValues
            }
        });
    },
    _addSlave: (slave)=>{
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);
        const characterId = daapi.getState().current.id;

        const previousSlave = E.getSlaveByType(slave.type);
        if (previousSlave) {
            E.pushInteractionModalQueue({
                title: `Replace: ${previousSlave.name} with: ${slave.name}?`,
                message: `You can only have one slave of any type at a time. Would you like to replace: ${previousSlave.name} with: ${slave.name}?`,
                options: [{
                    text: `Yes, I grow tired of ${previousSlave.name}. Replace them with ${slave.name}`,
                    action: {
                        event: moduleName,
                        method: "doSwapSlave",
                        context: {previousSlave: previousSlave, newSlave: slave}
                    }                    
                }, {
                    text: `No, ${previousSlave.name} has served me well. They may stay.`,
                }]
            });
            return;
        }
        E.saveAppData(E.getAppData().concat(slave));

        for (const key in slave.modifiers ) {
            const modifier = slave.modifiers[key]
            daapi.addModifier({
                key: key,
                id: modifier.id,
                durationInMonths: 100*12,
                factor: modifier.factor
            });
        }
        for (const skill in slave.skills) {
            const value = slave.skills[skill];
            E.addSkillToCharacter({
                characterId: characterId,
                skill: skill,
                value: value
            });
        }
        daapi.addCharacterAction({
            characterId: daapi.getState().current.id,
            key: slave.key,
            action: {
                title: E.slaveToString(slave),
                icon: daapi.requireImage(E.assetPath + slave.type + ".svg"),
                isAvailable: true,
                hideWhenBusy: true,
                process: {
                    event: moduleName,
                    method: "doManageSlave",
                    context: slave
                }
            }
        });
        daapi.updateCharacter({});
    },
    _filterHouseCharacters: (ch=null, fn) => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        let returnCharacters = [];
        ch = ch || daapi.getCharacter({characterId: daapi.getState().current.id});
        const retVal = fn(ch);
        if (retVal) returnCharacters.push(retVal);

        if (ch.isMale && ch.childrenIds && ch.childrenIds.length > 0) {
            for (childId of ch.childrenIds) {
                returnCharacters = returnCharacters.concat(E.filterHouseCharacters(daapi.getCharacter({
                    characterId: childId
                }), fn));
            }
        }
        return returnCharacters;
    },
    _getRandomChildAvailableForEducation: () => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        const candidates = E.filterHouseCharacters(null, (c)=>{
            let age = daapi.calculateAge({ month: c.birthMonth, year: c.birthYear });
            if ((age < 25) && (age > 3) && !c.isDead &&
                !c.flagIsBusy &&
                !c.flagIsAway && !(!c.isMale && c.spouseId)) return c;
         
            return null;
        });
        if (candidates.length && candidates.length > 0) {
            return E.randomFromArray(candidates);
        }
        return null;
    },
    _getTreatableTraits: (c)=>{
        let traits = [];
        const addMatchingTrait = (ch, traits, trait) => {
            if (ch.traits.includes(trait)) 
                traits.push(trait);
            return traits;
        };
        traits = addMatchingTrait(c, traits, 'deformed');
        traits = addMatchingTrait(c, traits, 'accidentDeformed');
        traits = addMatchingTrait(c, traits, 'illness');
        traits = addMatchingTrait(c, traits, 'malnourished');
        traits = addMatchingTrait(c, traits, 'extremelyMalnourished');
        traits = addMatchingTrait(c, traits, 'mangled');
        traits = addMatchingTrait(c, traits, 'severelyMangled');
        traits = addMatchingTrait(c, traits, 'stutter');
        traits = addMatchingTrait(c, traits, 'wounded');
        traits = addMatchingTrait(c, traits, 'greviouslyWounded');
        traits = addMatchingTrait(c, traits, 'alcoholic');

        return traits;
    },
    _getRandomTreatableKin: () => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        let trait;
        const candidates = E.filterHouseCharacters(null, (c)=>{
            if (c.isDead ||
                c.flagIsBusy ||
                c.flagIsAway || 
                (!c.isMale && c.spouseId)
            ) {
                return null
            }

            const treatableTraits = E.getTreatableTraits(c)
            return treatableTraits.length > 0 ? c : null;
        });
        if (candidates.length && candidates.length > 0) {
            return E.randomFromArray(candidates);
        }
        return null;
    },
    _getEntertainableTraits: (c)=>{
        let traits = [];
        const addMatchingTrait = (ch, traits, trait) => {
            if (ch.traits.includes(trait)) 
                traits.push(trait);
            return traits;
        };
        traits = addMatchingTrait(c, traits, 'ugly');
        traits = addMatchingTrait(c, traits, 'stress');
        traits = addMatchingTrait(c, traits, 'highlyStress');
        traits = addMatchingTrait(c, traits, 'depression');
        traits = addMatchingTrait(c, traits, 'cripplingDepression');
        traits = addMatchingTrait(c, traits, 'stutter');
        traits = addMatchingTrait(c, traits, 'alcoholic');
        traits = addMatchingTrait(c, traits, 'stutter');
        traits = addMatchingTrait(c, traits, 'shy');
        traits = addMatchingTrait(c, traits, 'stubborn');
        traits = addMatchingTrait(c, traits, 'rude');

        return traits;
    },
    _getRandomEntertainableKin: () => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);

        let trait;
        const candidates = E.filterHouseCharacters(null, (c)=>{
            if (c.isDead ||
                c.flagIsBusy ||
                c.flagIsAway || 
                (!c.isMale && c.spouseId)
            ) {
                return null
            }

            const treatableTraits = E.getEntertainableTraits(c)
            return treatableTraits.length > 0 ? c : null;
        });
        if (candidates.length && candidates.length > 0) {
            return E.randomFromArray(candidates);
        }
        return null;
    },
    _randomFromArray: (a) => {
        return a[Math.floor(Math.random() * a.length)];        
    },
    _slaveLevelUp: (slave) => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);
        E.removeSlaveByKey(slave.key);
        
        slave.level == 10 ? 10 : slave.level+1;
        // we gigged the level, do they get a stat increase elsewhere?
        // maybe add a random bonus independent of the slave type?

        E.addSlave(slave);
        return slave;
    },
    _checkForSlaveBonuses: () => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);
        const scale = daapi.calculateScaleByClassFactor();

        const slaves = E.getAppData();
        const odds = [0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055, 0.06, 0.065, 0.07];
        for (const slave of slaves) {
            if (slave.type == 'educator' || slave.type == 'manager') {
                let chanceToLevelSlave = 0;
                const roll = Math.random();
                // console.log("ROLL: ", roll, (odds[slave.level-1] || 0.07));
                if (roll < (odds[slave.level-1] || 0.07)) {
                    // lucky event
                    chanceToLevelSlave = 0.25;
                    switch (slave.type) {
                        case 'educator':
                            // do we have a valid child?
                            const child = E.getRandomChildAvailableForEducation();
                            if (child) {
                                if (child.traits && child.traits.includes('dimwit')) {
                                    daapi.removeTrait({
                                        characterId: child.id,
                                        trait: 'dimwit'
                                    });
                                } else {
                                    if (Math.random() < 0.8) {
                                        // most of the time, add to base stats
                                        const max = Math.max(1, slave.level > 2 ? 2 : 1, slave.level > 7 ? 3 : 1);
                                        const addToTrait = E.generateRandomIntegerBetween(1, max);
                                        const skill = (Math.random() > 0.5) ? 'stewardship' : 'eloquence'; 

                                        E.pushInteractionModalQueue({
                                            title: `Your Slave, ${slave.name} Reports Results`,
                                            message: `Master, I've educated your kin, ${child.praenomen}, in the skill of ${skill}. Their improvement has been ${addToTrait == 1 ? 'average.' : addToTrait == 2 ? 'quick.' : 'amazing!'}`,
                                            options: [{
                                                text: `Excellent work, ${slave.name}!`
                                            }]
                                        });
                                        E.addSkillToCharacter({
                                            characterId: child.id,
                                            skill: skill,
                                            value: addToTrait
                                        });
                                    } else {
                                        // rarely, we add a trait
                                        chanceToLevelSlave = 0.4;

                                        const possibleTraits = [], reversers = {
                                            gregarious: 'shy',
                                            honorable: 'sly',
                                        };
                                        if (!child.traits.includes('erudite')) possibleTraits.push('erudite');
                                        if (!child.traits.includes('gregarious')) possibleTraits.push('gregarious');
                                        if (!child.traits.includes('honorable')) possibleTraits.push('honorable');
                                        if (!child.traits.includes('literate')) possibleTraits.push('literate');
                                        if (!child.traits.includes('educated')) possibleTraits.push('educated');

                                        if (possibleTraits.length > 0) {
                                            const trait = E.randomFromArray(possibleTraits);
                                            let message = `made your kin, ${child.praenomen}, ${trait}`;
                                            daapi.addTrait({
                                                characterId: child.id,
                                                trait: trait
                                            });
                                            if (reversers[trait]) {
                                                message += ` instead of ${reversers[trait]}`;
                                                daapi.removeTrait({
                                                    characterId: child.id,
                                                    trait: reversers[trait]
                                                });
                                            }
                                            E.pushInteractionModalQueue({
                                                title: `Your Slave, ${slave.name} Reports Results`,
                                                message: `Master, I've ${message}.`,
                                                options: [{
                                                    text: `Excellent work, ${slave.name}!`
                                                }]
                                            });
                                        } else {
                                            const addToTrait = 3;
                                            const skill = (Math.random() > 0.5) ? 'stewardship' : 'eloquence'; 
        
                                            E.pushInteractionModalQueue({
                                                title: `Your Slave, ${slave.name} Reports Results`,
                                                message: `Master, I've educated your kin, ${child.praenomen}, in the skill of ${skill}. Their improvement has been amazing!`,
                                                options: [{
                                                    text: `Excellent work, ${slave.name}!`
                                                }]
                                            });
                                            E.addSkillToCharacter({
                                                characterId: child.id,
                                                skill: skill,
                                                value: addToTrait
                                            });    
                                        }                                 
                                    }
                                }
                            }
                            break;
                        case 'manager':
                            const secondRoll = Math.random();
                            if (secondRoll > 0.9) {
                                // 10% chance of property deal
                                const properties = [{
                                        type: "farmland",
                                        max: 5,
                                        normalCost: 250
                                    }, {
                                        type: "vinyard",
                                        max: 5,
                                        normalCost: 360
                                    },{
                                        type: "orchard",
                                        max: 5,
                                        normalCost: 420
                                    },{
                                        type: "primeFarmland",
                                        max: 3,
                                        normalCost: 2700
                                    },{
                                        type: "primeVinyard",
                                        max: 3,
                                        normalCost: 3300
                                    },{
                                        type: "primeOrchard",
                                        max: 3,
                                        normalCost: 3900
                                    },{
                                        type: "latifundiumFood",
                                        max: 1,
                                        normalCost: 11000
                                    },{
                                        type: "latifundiumAnimal",
                                        max: 1,
                                        normalCost: 14000
                                    },{
                                        type: "latifundiumFish",
                                        max: 1,
                                        normalCost: 17000
                                    },{
                                        type: "latifundiumOil",
                                        max: 1,
                                        normalCost: 21000
                                    }
                                ];
                                const propertyDefinition = E.randomFromArray(properties);
                                const propertyCount = E.generateRandomIntegerBetween(1, propertyDefinition.max);
                                const normalCost = propertyCount * propertyDefinition.normalCost;
                                const offerPrice = (E.generateRandomIntegerBetween(15, 40) / 100) * normalCost;
                                const property = {};
                                property[propertyDefinition.type] = propertyCount;
                                E.pushInteractionModalQueue({
                                    title: `${slave.name} Has Uncovered a Deal`,
                                    message: `Master, I've found some highly undervalued property we could immediately repair and bring into operation. ${propertyCount > 1 ? 'these' : 'the'} ${propertyCount} ${propertyDefinition.type} would only cost ${offerPrice} instead of ${normalCost}. Would you like to proceed with the purchase?`,
                                    options: [{
                                        text: `Great work, ${slave.name}! Yes, let's buy the property.`,
                                        statChanges: {
                                            cash: (offerPrice / scale) * -1,
                                            property: property
                                        }
                                    },{
                                        text: `Excellent find, ${slave.name}, but I must pass on this deal.`
                                    }]
                                });
                            } else if (secondRoll > 0.6) {
                                // 30% chance of windfall
                                const windfallAmount = E.generateRandomIntegerBetween(500, 1000) * slave.level;
                                E.pushInteractionModalQueue({
                                    title: `${slave.name} Has Uncovered a Business Deal`,
                                    message: `Master, I've gone through our books and noted a clerical error. I've recovered $${windfallAmount} in extra revenue!`,
                                    options: [{
                                        text: `Great work, ${slave.name}!`,
                                        statChanges: {
                                            cash: windfallAmount / scale
                                        }
                                    }]
                                });
                            } else {
                                // 60% chance of adding stewardship to kin
                                const child = E.getRandomChildAvailableForEducation();
                                if (child) {
                                    // most of the time, add to base stats
                                    const max = Math.max(1, slave.level > 2 ? 2 : 1, slave.level > 7 ? 3 : 1);
                                    const addToTrait = E.generateRandomIntegerBetween(1, max);
                                    const skill = 'stewardship'; 

                                    E.pushInteractionModalQueue({
                                        title: `Your Slave, ${slave.name} Reports Results`,
                                        message: `Master, I've educated your kin, ${child.praenomen}, in the skill of ${skill}. Their improvement has been ${addToTrait == 1 ? 'average.' : addToTrait == 2 ? 'quick.' : 'amazing!'}`,
                                        options: [{
                                            text: `Excellent work, ${slave.name}!`
                                        }]
                                    });
                                    E.addSkillToCharacter({
                                        characterId: child.id,
                                        skill: skill,
                                        value: addToTrait
                                    });
                                }                            
                            }
                            break;
                        default:
                            break;
                    }
                }
                // maybe ...
                // if (Math.random() < chanceToLevelSlave) {
                //     E.slaveLevelUp(slave);
                // }
            } else if (slave.type == 'doctor') {
                const doctorOdds = [0.055, 0.06, 0.065, 0.07, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2];
                const treatableCharacter = E.getRandomTreatableKin();
                const treatmentRoll = Math.random();
                if ( treatableCharacter && (treatmentRoll < (doctorOdds[slave.level-1] || 0.2)) ) {
                    const replaceTrait = {
                        "highlyStress": "stress",
                        "cripplingDepression": "depression",
                        "extremelyMalnourished": "malnourished",
                        "severelyMangled": "mangled",
                        "greviouslyWounded": "wounded"
                    };
                    const treatableTraits = E.getTreatableTraits(treatableCharacter);
                    const treatmentTrait = E.randomFromArray(treatableTraits);

                    console.log(treatableTraits, treatmentTrait);
                    daapi.removeTrait({
                        characterId: treatableCharacter.id,
                        trait: treatmentTrait
                    });
                    if (replaceTrait[treatmentTrait]) {
                        daapi.addTrait({
                            characterId: treatableCharacter.id,
                            trait: replaceTrait[treatmentTrait]    
                        });
                    }
                    E.pushInteractionModalQueue({
                        title: `Dr. ${slave.name} Reports`,
                        message: `Master, I have treated ${treatableCharacter.praenomen}'s ${treatmentTrait}.`,
                        options: [{
                            text: `Great job, ${slave.name}!`
                        }]
                    });
                }
            } else if (slave.type == 'entertainer') {
                const giveSomeEloquence = (s) => {
                    const c = E.getRandomChildAvailableForEducation();
                    if (c) {
                        const max = Math.max(1, s.level > 2 ? 2 : 1, s.level > 7 ? 3 : 1);
                        const addToTrait = E.generateRandomIntegerBetween(1, max);
                        const skill = 'eloquence'; 

                        E.pushInteractionModalQueue({
                            title: `Your Slave, ${s.name} Reports Results`,
                            message: `Master, I've educated your kin, ${c.praenomen}, in the skill of ${skill}. Their improvement has been ${addToTrait == 1 ? 'average.' : addToTrait == 2 ? 'quick.' : 'amazing!'}`,
                            options: [{
                                text: `Excellent work, ${s.name}!`
                            }]
                        });
                        E.addSkillToCharacter({
                            characterId: c.id,
                            skill: skill,
                            value: addToTrait
                        });
                    }
                };
                // rare events
                if (Math.random() < 0.05) {
                    // add trait
                    if (Math.random() < 0.3) {
                        const candidates = E.filterHouseCharacters(null, (c)=>{
                            if (c.isDead ||
                                c.flagIsBusy ||
                                c.flagIsAway || 
                                (!c.isMale && c.spouseId)
                            ) {
                                return null
                            }
                
                            return c.traits.includes('gregarious') ? null : c;
                        });
                        if (candidates.length && candidates.length > 0) {
                            const luckyKin = E.randomFromArray(candidates);
                            // add gregarious
                            daapi.addTrait({
                                characterId: luckyKin.id,
                                trait: 'gregarious'
                            });
                            E.pushInteractionModalQueue({
                                title: `${slave.name} Reports`,
                                message: `Master, I have taught ${luckyKin.praenomen} to be gregarious!`,
                                options: [{
                                    text: "Thanks!"
                                }]
                            });
                        } else {
                            giveSomeEloquence(slave);
                        }
                    } else {
                        // add to eloquence
                        giveSomeEloquence(slave);
                    }
                }

                // normal monthly work
                const entertainerOdds = [0.15, 0.20, 0.25, 0.3, 0.35, 0.4, 0.5, 0.6, 0.7, 0.8];
                const treatableCharacter = E.getRandomEntertainableKin();
                const treatmentRoll = Math.random();
                if ( treatableCharacter && (treatmentRoll < (entertainerOdds[slave.level-1] || 0.2)) ) {
                    const replaceTrait = {
                        "highlyStress": "stress",
                        "cripplingDepression": "depression",
                        "extremelyMalnourished": "malnourished",
                        "severelyMangled": "mangled",
                        "greviouslyWounded": "wounded"
                    };
                    const treatableTraits = E.getEntertainableTraits(treatableCharacter);
                    const treatmentTrait = E.randomFromArray(treatableTraits);

                    daapi.removeTrait({
                        characterId: treatableCharacter.id,
                        trait: treatmentTrait
                    });
                    if (replaceTrait[treatmentTrait]) {
                        daapi.addTrait({
                            characterId: treatableCharacter.id,
                            trait: replaceTrait[treatmentTrait]    
                        });
                    }
                    E.pushInteractionModalQueue({
                        title: `Wise Clown, ${slave.name}, has treated ${treatableCharacter.praenomen}`,
                        message: `Master, I have entertained and guided ${treatableCharacter.praenomen} helping with their ${treatmentTrait}.`,
                        options: [{
                            text: `Great job, ${slave.name}!`
                        }]
                    });
                }
            } else if (slave.type == 'warrior') {
                // first, good odds they keep someone in shape
                const doctorOdds = [0.3, 0.4, 0.5, 0.5, 0.75, 0.75, 1, 1, 1, 1];

                const candidates = E.filterHouseCharacters(null, (c)=>{
                    if (c.isDead ||
                        c.flagIsBusy ||
                        c.flagIsAway || 
                        (!c.isMale && c.spouseId)
                    ) {
                        return null
                    }        
                    return c.traits.includes('fat') || c.traits.includes('morbidlyFat') ? c : null;
                });
                if (candidates.length && candidates.length > 0) {
                    const luckyKin = E.randomFromArray(candidates);
                    const treatmentRoll = Math.random();
                    if ( treatmentRoll < (doctorOdds[slave.level-1] || 1) ) {
                        daapi.removeTrait({
                            characterId: treatableCharacter.id,
                            trait: 'fat'
                        });
                        daapi.removeTrait({
                            characterId: treatableCharacter.id,
                            trait: 'morbidlyFat'
                        });
                        E.pushInteractionModalQueue({
                            title: `${slave.name} Reports`,
                            message: `Master, I have whipped ${treatableCharacter.praenomen} into shape.`,
                            options: [{
                                text: `Great job, ${slave.name}!`
                            }]
                        });
                    }
                }

                // next, rare cases of adding combat trait or skills
                const giveSomeCombat = (s) => {
                    const c = E.getRandomChildAvailableForEducation();
                    if (c) {
                        const max = Math.max(1, s.level > 2 ? 2 : 1, s.level > 7 ? 3 : 1);
                        const addToTrait = E.generateRandomIntegerBetween(1, max);
                        const skill = 'combat'; 

                        E.pushInteractionModalQueue({
                            title: `Your Slave, ${s.name} Reports Results`,
                            message: `Master, I've educated your kin, ${c.praenomen}, in the skill of ${skill}. Their improvement has been ${addToTrait == 1 ? 'average.' : addToTrait == 2 ? 'quick.' : 'amazing!'}`,
                            options: [{
                                text: `Excellent work, ${s.name}!`
                            }]
                        });
                        E.addSkillToCharacter({
                            characterId: c.id,
                            skill: skill,
                            value: addToTrait
                        });
                    }
                };
                // rare events
                if (Math.random() < Math.max(0.05, 0.01*slave.level)) {
                    // add trait
                    if (Math.random() < 0.3) {
                        const candidate = E.getRandomChildAvailableForEducation();
                        if (candidate) {
                            const getRandomTrait = ()=>{
                                return E.randomFromArray(['horseRider','charioteer','gladiator','wrestler','strong','taurian','marksMan','authoritative', 'competitive']);
                            };
                            const traitStrings = {
                                horseRider: "a horseman",
                                charioteer: "a charioteer",
                                gladiator: "a gladiator",
                                wrestler: "a wrestler",
                                strong: "strong",
                                taurian: "a taurian",
                                marksMan: "a marksman",
                                authoritative: "authoratative", 
                                competitive: "competitive"                                
                            };
                            let newTrait = getRandomTrait(), defense=0;
                            while (candidate.traits.includes(newTrait) && defense < 500) {
                                defense+=1;
                                newTrait = getRandomTrait();
                            }
                            // add gregarious
                            daapi.addTrait({
                                characterId: candidate.id,
                                trait: newTrait
                            });
                            E.pushInteractionModalQueue({
                                title: `${slave.name} Reports`,
                                message: `Master, I have taught ${candidate.praenomen} to be ${traitStrings[newTrait]}!`,
                                options: [{
                                    text: "Thanks!"
                                }]
                            });
                        } else {
                            giveSomeCombat(slave);
                        }
                    } else {
                        // add to combat
                        giveSomeCombat(slave);
                    }
                }                
            }
        }
    },
    _progressSlaves: () => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);
        const slaves = E.getAppData();
        const updatedSlaves = slaves.filter((s)=>{
            let deathChance;
            if (s.age >= 50) {
                deathChance = (1/15 * (s.age / 65));
            } else {
                deathChance = (1/40 * (s.age / 50));
            }

            if (Math.random() < deathChance) {
                E.pushInteractionModalQueue({
                    title: `A Slave Has Died`,
                    message: `Your slave, ${s.name}, has died. May they rest in peace.`,
                    options: [{
                        text: `I'm sorry to hear that.`
                    }]
                });
                E.removeSlaveByKey(s.key);
                return false;
            }
            return true;
        }).map((s)=>{
            s.age += (1/12);
            if (Math.random() < .02) {
                s = E.slaveLevelUp(s);
            }
            return s;
        });
        E.saveAppData(updatedSlaves);
    },
    _slaveMarket: () => {
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);
        const character = daapi.getCharacter({
            characterId: daapi.getState().current.id
        });
        const scale = daapi.calculateScaleByClassFactor();

        if (character.flagIsBusy && character.flagIsAway)
            return;

        const slavesOnSale = [];
        // every once in a while, a merchant with skilled slaves will appear
        if (Math.random() < 0.05) {
            for (let i=-2; i<E.generateRandomIntegerBetween(1,3); i++) {
                slavesOnSale.push(E.generateRandomSlave());
            }

            const assessmentAccuracyRating = Math.max(1,((character.skills.intelligence / 15) + (Math.random()) + (E.getSlaveByType("manager") ? 1.5 : 0.5))/3);
            console.log(assessmentAccuracyRating);
            const slaveOptions = [];
            for (const slave of slavesOnSale) {
                const accuracyFactor = slave.level - (slave.level * assessmentAccuracyRating);
                const perceivedLevel = Math.round(slave.level + ((Math.random() > 0.5 ? -1:1) * accuracyFactor));
                const costOfSlave = (E.generateRandomIntegerBetween(750,1250) * slave.level) * (E.generateRandomIntegerBetween(75,125)/100) * 2;

                console.log("COST: ", costOfSlave, slave);
                slaveOptions.push({
                    text: `A slave named, ${slave.name}, who claimes they were a ${slave.type}. You estimate this slave's skill level to be around ${perceivedLevel}.`,
                    statChanges: {
                        cash: -1 * (costOfSlave / scale)
                    },
                    action: {
                        event: moduleName,
                        method: "doAddSlave",
                        context: slave
                    }
                });
            }
            slaveOptions.push({
                text: "No thanks."
            });
            E.pushInteractionModalQueue({
                title: "A Slave Market Has Arrived!",
                message: "A slave merchant has arrived at market with a batch of unusually skilled enslaved nobles from Germania. The prices are high, but the merchant stands by them claiming that these slaves will pay for themselves quickly to those that recognize and properly use their talents. Will you purchase a slave today?",
                options: slaveOptions
            });
        }
    },
    _refreshCommandIcons: ()=>{
        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName);
        const character = daapi.getCharacter({
            characterId: daapi.getState().current.id
        });
        const slaves = E.getAppData();

        if (slaves && slaves.length > 0) {
            if (slaves[0].characterId !== character.id) {
                // the owner of these slaves has died, transfer ownership
                const updatedSlaves = slaves.map((s)=>{
                    E.removeSlaveByKey(s.key);
                    s.characterId = character.id;
                    E.addSlave(s);
                    return s;
                });
                E.saveAppData(updatedSlaves);
            }
        }
    },
    _uuid: () => {
        const b = crypto.getRandomValues(new Uint16Array(8));
        const d = [].map.call(b, a => a.toString(16).padStart(4, '0')).join('');
        const vr = (((b[5] >> 12) & 3) | 8).toString(16);
        return `${d.substr(0, 8)}-${d.substr(8, 4)}-4${d.substr(13, 3)}-${vr}${d.substr(17, 3)}-${d.substr(20, 12)}`;
    },
    _isFunction: (functionToCheck) => {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    },
    _debug: false,
    setupMethod: (path, debug=false) => {
        const methodsObject = daapi.modData.events[path];
        const returnObject = {};

        debug = methodsObject._debug || debug;
        methodsObject._debug = debug;
        for (prop in methodsObject) {
            if (prop.match(/^_[a-zA-Z0-9]{1}.+?$/)) {
                if (daapi.modData.events['/household_slaves/events/monthlyEvents']._isFunction(methodsObject[prop])) {
                    returnObject[prop.slice(1)] = (function (m, p) {
                        return function (...args) {
                            try {
                                if (debug){
                                    console.log("CALLING: " + p, ...args);
                                }
                                const retVal = m[p](...args);
                                if (debug && retVal){
                                    console.log("RETURNING: " + p, retVal);
                                }
                                return retVal;
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    })(methodsObject, prop);
                } else {
                    returnObject[prop.slice(1)] = methodsObject[prop];
                } 
            }
        }

        return returnObject;
    },

    checkAndAct: () => {
        daapi.openDevTools();
        console.log("START HOUSEHOLD SLAVES");

        const moduleName = '/household_slaves/events/monthlyEvents';
        const E = daapi.modData.events[moduleName].setupMethod(moduleName, false);
        
        E.refreshCommandIcons();
        E.checkForSlaveBonuses();
        E.progressSlaves();
        E.slaveMarket();
        // const newSlave = E.generateRandomSlave();

        // console.log("SLAVE", newSlave);
        // E.addSlave(newSlave);
    },
    methods: {
        genericPushInteractionModalQueue: (params) => {
            daapi.pushInteractionModalQueue(params);
        },
        doSwapSlave: ({previousSlave, newSlave}) => {
            const moduleName = '/household_slaves/events/monthlyEvents';
            const E = daapi.modData.events[moduleName].setupMethod(moduleName);

            E.removeSlaveByKey(previousSlave.key);
            E.addSlave(newSlave);
        },
        doManageSlave: (slave) => {
            console.log("MANAGE", slave);

            const moduleName = '/household_slaves/events/monthlyEvents';
            const E = daapi.modData.events[moduleName].setupMethod(moduleName);
            const slaveValue = 800 * slave.level;
            const slavePrestigeValue = 2.5 * slave.level;
            const slaveInfluenceValue = 5 * slave.level;

            E.pushInteractionModalQueue({
                title: "Managing slave: " + slave.name,
                message: "Hello master, what can I do for you?",
                image: daapi.requireImage(E.assetPath + slave.type + ".svg"),
                options: [{
                    text: "I've had enough of your services, " + slave.name + ". Let's see what you fetch at the market!",
                    tooltip: "Sell " + slave.name,
                    action: {
                        event: moduleName,
                        method: "doRemoveSlave",
                        context: slave
                    },
                    statChanges: {
                        cash: slaveValue,
                    },
                }, {
                    text: slave.name + ", I've got some great news! You're free!",
                    tooltip: "Free " + slave.name,
                    action: {
                        event: moduleName,
                        method: "doRemoveSlave",
                        context: slave
                    },
                    statChanges: {
                        prestige: slavePrestigeValue,
                        influence: slaveInfluenceValue,
                    },
                }, {
                    text: "Nevermind, slave."
                }]
            });
        },
        doRemoveSlave: (slave) => {
            const moduleName = '/household_slaves/events/monthlyEvents';
            const E = daapi.modData.events[moduleName].setupMethod(moduleName);

            E.removeSlaveByKey(slave.key);
        },
        doAddSlave: (slave) => {
            const moduleName = '/household_slaves/events/monthlyEvents';
            const E = daapi.modData.events[moduleName].setupMethod(moduleName);
            E.addSlave(slave);
        }
    }
}