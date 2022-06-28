const Human = require('../exercises/human');

class Ogre {
    constructor(ogreObj) {
        this.name = ogreObj.name;
        this.home = ogreObj.abode || 'Swamp';
        this.swings = 0;
    }
    encounter(human) {
        human.encounterCounter ++;
        if (human.noticesOgre() === true) {
            this.swingAt();
        } else if (this.swings % 2 === 0) {
            human.knockedOut = true;
        }
    }
    swingAt() {
        this.swings ++;
    }
    apologize(human) {
        human.knockedOut = false;
    }
}

module.exports = Ogre;