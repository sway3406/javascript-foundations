var Skater = require('./skater.js');

class SkatePark {
    constructor(skateParkObj) {
        this.name = skateParkObj.name;
        this.yearFounded = skateParkObj.year;
        this.style = skateParkObj.type;
        this.features = skateParkObj.features;
        this.isPrivate = skateParkObj.isPrivate || false;
        this.cost = skateParkObj.price || 0;
        this.occupants = [];
    }   
}

module.exports = SkatePark;