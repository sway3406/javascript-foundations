class Magician {
  constructor(object) {
    this.name = `The Great ${object.name}`;
    this.assistant = object.assistant;
    this.favoriteAccessory = object.clothing || 'top hat';
  }

  performIncantation(incantation) {
   return `${incantation.toUpperCase()}!`;
  }
  performTrick(incantation) {
    if(this.favoriteAccessory === 'top hat') {
    return `PULL RABBIT FROM TOP HAT`;
      } else {
      return `PULL DOVE FROM SLEEVE`;
    }
  }
}


module.exports = Magician;
