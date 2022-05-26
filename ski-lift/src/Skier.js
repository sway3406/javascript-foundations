class Skier {
  constructor(name, hasLiftTicket, skillLevel, nextSlope) {
    this.name = name;
    this.hasLiftTicket = true;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }
  takeLesson() {
    this.skillLevel+=1
  }
  pickSlope() {
    if(this.skillLevel > 2) {
      this.nextSlope = 'blue square';
    }
  }
}

module.exports = Skier;
