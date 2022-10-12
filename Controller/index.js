// Retrieves data from pokemons.json
const fs = require('fs');

let rawdata = fs.readFileSync("Controller/pokemons.json");
let data = JSON.parse(rawdata);

// util functions
function Weakness(weakness) {
    this.weakness = weakness;
    this.count = 1;
}
/**
 * Find Attack Details Based on Attack Name
 */
function findAttack(attack){
    let found = false;
    let i = 0; // increment for pokemon list
    let j = 0; // increment for move list

    while(!found && i < data.length){
        // check if pokemon has the move
        j = 0;
        while(!found && j < data[i]['Special Attack(s)'].length) {
            if(data[i]['Special Attack(s)'][j].Name === attack){
                found = data[i]['Special Attack(s)'][j];
            }
            j++;
        }

        j = 0;
        while(!found && j < data[i]['Fast Attack(s)'].length) {
            if(data[i]['Fast Attack(s)'][j].Name === attack)
                found = data[i]['Fast Attack(s)'][j];
            j++;
        }
        i++;
    }

    return found;
}


// main functions

const pokedexFunctions ={
    /**
 * Returns array of all pokemon names
 */
    findNames: async function(req,res){
        res.send(data.map(data => data.Name));
    },

    /**
     * Returns an array of pokemon objects that are resistant to the specified
     * attack
     */
    findByResistance: async function(req,res) {
        let attackDetails = findAttack(req.query.attack);
        res.send(data.filter(data => data.Resistant.includes(attackDetails.Type)));
    },

    /**
     * Returns an array pokemon names that are resistant to the specified
     * attack
     */
    findNamesByResistance: async function(req,res) {
        console.log(req.query.attack);
        let attackDetails = findAttack(req.query.attack);
        let withResistance = data.filter(data => data.Resistant.includes(attackDetails.Type));
        res.send(withResistance.map(withResistance => withResistance.Name));
    },

    /**
     * Returns the average max CP of all pokemon
     */
    avgMaxCP: async function(req,res){
        let withCP = data.filter(data => data.MaxCP != null);
        let avgCP = withCP.reduce((result, withCP) => {
            return result += withCP.MaxCP},0)/withCP.length;
        res.status(200).send(avgCP.toString());
    },

    /**
     * Returns an array of objects that contains the list
     * of weaknesses and the number of times they occur 
     * in the dataset
     */
    countedWeaknesses: async function(req,res) {
        let weaknesses = new Array();
        let weaknessList = new Array();

        data.map(data => {
            for(let i = 0; i < data.Weaknesses.length; i++) {
                if(weaknessList.length === 0) {
                    weaknesses.push(new Weakness(data.Weaknesses[i]));
                    weaknessList.push(data.Weaknesses[i]);
                }
                else if(weaknessList.indexOf(data.Weaknesses[i]) === -1) {
                    weaknesses.push(new Weakness(data.Weaknesses[i]));
                    weaknessList.push(data.Weaknesses[i]);
                }
                else
                    weaknesses[weaknessList.indexOf(data.Weaknesses[i])].count += 1;
            }
        });

        res.send(weaknesses);
    }

}

module.exports = pokedexFunctions;