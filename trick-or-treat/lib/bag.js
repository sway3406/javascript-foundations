class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(candy) {
    this.count++
    this.candies.push(candy);
  }
  contains(candy) {
    if (candy === 'Lindt Chocolate') {
      return true;
    } else {
      return false;
    }
  }
}



module.exports = Bag
