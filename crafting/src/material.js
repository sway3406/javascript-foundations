var Craft = require("../src/craft.js");

class Material {
  constructor(name, price, amount, units){
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }
  useMaterial(amountUsed) {
    if (amountUsed > this.amount) {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    } else {
      this.amount-=amountUsed
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
    }
  }
  calculateMaterialCost() {
    var totalCost = this.amount * this.price;
    return totalCost;
  }
}

module.exports = Material;
