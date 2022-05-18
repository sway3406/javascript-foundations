class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.meals = 0;
  }
  greet(rider) {
    return `Hi, ${this.rider}!`
  }
  eat() {
this.meals++
  if(this.meals >= 3) {
    this.hungry = false;
    }
  }
}

module.exports = Dragon;
