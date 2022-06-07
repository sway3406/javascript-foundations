const Stark = require('../exercises/stark');

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
  }
  protect(starkDetails) {
    this.starksToProtect.push(starkDetails);
  }
}


module.exports = Direwolf;
