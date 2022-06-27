const Direwolf = require('../exercises/direwolf');

class Stark {
    constructor(starkObj) {
        this.name = starkObj.name;
        this.location = starkObj.area || 'Winterfell';
        this.safe = false;
    }
    sayHouseWords() {
        if (this.safe === true) {
            return 'The North Remembers';
        } else {
            return 'Winter is Coming';
        }
    }
    callDirewolf(name, location) {
        var direwolf = new Direwolf(name, location);
        direwolf.home = this.location;
        direwolf.protect(this);
        return direwolf;
    }
}


module.exports = Stark;
