var Snowman = require('./Snowman');

class Human {
  constructor(personName) {
    this.name = personName;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }
  gatherMaterials(materialType, materialAmount) {
    this.materials[materialType] += materialAmount;
  }
  buildASnowman() {
    var snowman = new Snowman(this.materials);
    return snowman;
  }
  placeMagicHat() {
    var snowman = new Snowman(this.materials);
    snowman.canWearMagicHat();
    if (snowman.magicHat === true) {
      return 'Woah, this snowman is coming to life!';
    } else {
      return 'I guess I didn\'t build it correctly.'
    }
  }
}



module.exports = Human;

















// class Human {
//   constructor(personName) {
//     this.name = personName;
//     this.wantsToBuildASnowman = true;
//     this.materials = {
//       snowballs: 0,
//       coal: 0,
//       buttons: 0,
//       carrots: 0
//   }
// }
//     gatherMaterials(materialGathered, amountGathered) {
//       this.materials[materialGathered] += amountGathered;
//   }
//   buildASnowman(materialGathered, amountGathered) {
//     var snowman = new Snowman(this.materials)
//     return snowman;
//
//   }
//   placeMagicHat() {
//     var snowman = new Snowman(this.materials);
//     snowman.canWearMagicHat();
//     if (snowman.magicHat === true) {
//       return `Woah, this snowman is coming to life!`;
//     } else {
//       return `I guess I didn\'t build it correctly.`;
//     }
//   }
// }
