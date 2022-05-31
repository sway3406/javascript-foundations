var Material = require("../src/material.js");

class Craft {
  constructor(craft) {
    this.name = craft.type;
    this.materials = craft.materials;
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return `All done! It looks great!`;
  }
  calculateProjectTotal(price, amount) {
  var totalCost = 0;
    for (var i = 0; i < this.materials.length; i++) {
      totalCost += (this.materials[i].amount * this.materials[i].price);
    }
    return totalCost;
    }
  }

module.exports = Craft;
