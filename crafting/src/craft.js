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
  calculateProjectTotal() {
 
  }
}
module.exports = Craft;
