class Centaur {
  constructor(newCentaur) {
    this.name = newCentaur.name;
    this.breed = newCentaur.type;
    this.cranky = newCentaur.cranky || false;
    this.standing = true;
    this.shootOrRun = 0;
    this.layingDown = false;
  }


  shootBow() {
    this.shootOrRun++
      if (this.shootOrRun >= 3) {
         this.cranky = true;
          return `NO!`;
          } else if (this.layingDown === true) {
            return `NO!`;
            } else {
              return `Twang!!!`;
            }
  }

  run() {
    this.shootOrRun++
      if (this.shootOrRun >= 3) {
          this.cranky = true;
            return `NO!`;
            } else if (this.layingDown === true) {
              return 'NO!';
              } else {
              return `Clop clop clop clop!!!`
            }
  }

  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      return `ZZZZ`;
    } else {
      return `NO!`;
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true
    this.layingDown = false;
    this.shootOrRun = 0;
  }
  drinkPotion() {
    if (this.layingDown === true) {
      return `Not while I\'m laying down!`
    } else {
      this.cranky = false;
    }
  }
}





module.exports = Centaur;
