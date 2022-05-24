class Hobbit {
  constructor({name}, age) {
    this.name = name;
    this.age = 0;
    this.adult = false;

  }
  celebrateBirthday(age) {
    this.age++
  }
  timeTravel(age) {
  // for(var i = 0; i >= this.age; i++)
    if (this.age <= 32) {
      this.adult = false;
    } else {
      this.adult = true;
      }
    }
  }






module.exports = Hobbit;
