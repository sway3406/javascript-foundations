class TrickOrTreater {
  constructor(costumeObj, bagObj) {
    this.dressedUpAs = costumeObj.style;
    this.bag = bagObj;
    this.hasCandy = false;
    this.countCandies = 0;

  }
  putCandyInBag(candy) {
    this.countCandies++
    this.bag.count++
    this.hasCandy = true;
    this.bag.candies.push(candy);
  }
  eat() {
    this.countCandies = 0;
    this.bag.candies.length = 0;
  }
}


module.exports = TrickOrTreater;
