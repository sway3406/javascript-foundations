const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(starkDetails) {
    this.name = starkDetails.name;
    this.location = starkDetails.area || 'Winterfell';

  }
}


module.exports = Stark;
