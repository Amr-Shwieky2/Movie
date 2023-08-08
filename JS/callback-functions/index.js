function healthIncrement(enemy){
    enemy.health+=10; 
    return enemy; 
}
function processEnemies (enemies , healthIncrement){ 
    if(!Array.isArray(enemies))
    throw "Expected an array of enemies"; 
    for(const enemy of enemies){
        if(!enemy["name"] || !enemy["health"])
        throw `Enemy the ID ${enemy.id} is not in the right structure`; 
    }
    let newEnemies = JSON.parse(JSON.stringify(enemies));
    console.log(newEnemies)
    newEnemies = newEnemies.map(enemy => healthIncrement(enemy)); 
    console.log(newEnemies)
    return newEnemies; 
}

function processQuests (quests , callback){ 
    if(!Array.isArray(quests))
    throw "Expected an array of quests"; 
    for(const quest of quests){
        if(!quest["name"] || !quest["experience"])
        throw `quest the ID ${quest.id} is not in the right structure`; 
    }
    const newQuests = JSON.parse(JSON.stringify(quests));
    newQuests = newQuests.map(quest => callback(quest)); 
    return newQuests; 
}

function processPlayers (players , healthIncrement){ 
    if(!Array.isArray(players))
    throw "Expected an array of players"; 
    for(const player of players){
        if(!player["name"] || !player["health"] || !player["level"]|| !player["location"]|| !player["inventory"])
        throw `player the ID ${player.id} is not in the right structure`; 
    }
    const newPlayers = JSON.parse(JSON.stringify(players));
    newPlayers = newPlayers.map(player => healthIncrement(player)); 
    return newPlayers; 
}
const enemiesToProcess = [
    {
    id: 1,
    name: "doflamingo",
    health:5

    },
    {
        id: 4,
        name: "kuma",
        health:10
    }
   ];

const processedEnemies = processEnemies(enemiesToProcess, healthIncrement);
   console.log(processedEnemies);
   
// console.log(processQuests([{id:5,health:50,name:"barbie"}],4)); 

   