class Snowman {
  constructor(snowPerson) {
    this.carrots = snowPerson.carrots;
    this.coal = snowPerson.coal;
    this.buttons = snowPerson.buttons;
    this.snowballs = snowPerson.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if(this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false
      } else {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
