const Stark = require('../exercises/stark');

class Direwolf {
    constructor(name, home, size) {
        this.name = name;
        this.home = home || 'Beyond the Wall';
        this.size = size || 'Massive';
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;

    }
    protect(stark) {
        this.huntsWhiteWalkers = false;
        if (this.starksToProtect.length >= 2) {
            return;
        } else if (this.home === stark.location) {   
            stark.safe = true; 
            this.starksToProtect.push(stark);
        }
    }
    leave(stark) {
        this.starksToProtect = [];
        stark.safe = false;
    }
}


module.exports = Direwolf;
