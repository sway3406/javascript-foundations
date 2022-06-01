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
        } else {
        return `Sorry, ${newSkier.name}. Please wait for the next lift!`
      }
    }
  startLift() {
    var skiersNeeded = this.limit - this.skiers.length;
    if (this.skiers.length < this.limit && skiersNeeded === 1) {
        this.safetyBar = `up`;
        return `We still need ${skiersNeeded} more skier!`;
    } else if (this.skiers.length < this.limit) {
        return `We still need ${skiersNeeded} more skiers!`;
    } else {
     return this.safetyBar = `down`;
  }
 }
}


module.exports = Lift;
