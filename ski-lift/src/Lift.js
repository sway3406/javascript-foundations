var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(name, liftTicket) {
    var newSkier = new Skier(name, liftTicket);
    if (newSkier.hasLiftTicket === false) {
      return `Sorry, ${newSkier.name}. You need a lift ticket!`;
    } else if (this.skiers.length < this.limit) {
        this.skiers.push(newSkier);
        console.log(this.skiers);
        } else {
        return `Sorry, ${newSkier.name}. Please wait for the next lift!`
      }
    }
  }

module.exports = Lift;
