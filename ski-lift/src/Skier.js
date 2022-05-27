class Skier {
  constructor(name, hasLiftTicket) {
    this.name = name;
    this.hasLiftTicket = hasLiftTicket;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }
  takeLesson() {
    this.skillLevel+=1
  }
  pickSlope() {
    if (this.skillLevel > 4) {
      this.nextSlope = 'black diamond';
    } else if(this.skillLevel >= 2) {
       this.nextSlope = 'blue square';
    }
  }
}


module.exports = Skier;



// else if (this.skillLevel > 4) {
//   this.nextSlope = 'black diamond';
