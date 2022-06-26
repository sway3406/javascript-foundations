const Direwolf = require('../exercises/direwolf');

class Stark {
    constructor(starkObj) {
        this.name = starkObj.name;
        this.location = starkObj.area || 'Winterfell';
        this.safe = false;
    }
    sayHouseWords(){
        if (this.safe === true) {
            return 'The North Remembers'
        } else {
            return 'Winter is Coming'
        }
    }
}


module.exports = Stark;
