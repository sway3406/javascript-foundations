var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
  }
  gatherMaterials(materialsGathered, material) {
    this.materials[materialsGathered] += material;
  }
  buildASnowman() {
    var snowman = new Snowman(this.materials);
    return snowman;
}

// This test works w/o modifying the test suite
placeMagicHat() {
  if (this.materials.coal < 2 || this.materials.buttons < 5 || this.materials.carrots < 1 || this.materials.snowballs < 2) {
  return 'I guess I didn\'t build it correctly.';
  } else {
    return 'Woah, this snowman is coming to life!';
    }
  }
}


//This fxn requires us to modify the test by adding snowman into each of the placeMagicHat arguments.
//   placeMagicHat(snowman) {
//     if (snowman.magicHat === true) {
//     return 'Woah, this snowman is coming to life!';
//   } else {
//     return 'I guess I didn\'t build it correctly.';
//     }
//   }
// }

module.exports = Human;
