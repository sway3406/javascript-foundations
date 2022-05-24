class Pirate {
  constructor(name, job, cursed) {
    this.name = name;
    this.job = job || 'scallywag';
    this.cursed = false;
}

  robShip() {
    return `YAARRR!`;
  }
}


module.exports = Pirate;
