var Human = require("../src/Human");

class Snowman {
  constructor(snowMan) {
    this.carrots = snowMan.carrots;
    this.coal = snowMan.coal;
    this.buttons = snowMan.buttons;
    this.snowballs = snowMan.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if(this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false
      } else {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
