var Human = require("../src/Human");

class Snowman {
  constructor(snowmanObj) {
    this.carrots = snowmanObj.carrots;
    this.coal = snowmanObj.coal;
    this.buttons = snowmanObj.buttons;
    this.snowballs = snowmanObj.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat;
    } else {
      this.magicHat = true;
    }
  }
}


module.exports = Snowman;





















// class Snowman {
//   constructor(snowMan) {
//     this.carrots = snowMan.carrots;
//     this.coal = snowMan.coal;
//     this.buttons = snowMan.buttons;
//     this.snowballs = snowMan.snowballs;
//     this.magicHat = false;
//   }
//   canWearMagicHat() {
//     if(this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
//       this.magicHat = false
//       } else {
//       this.magicHat = true;
//     }
//   }
// }
//
//
