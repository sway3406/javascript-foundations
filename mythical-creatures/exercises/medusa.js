var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name, statues) {
    this.name = name;
    this.statues = [];

  }
  gazeAtVictim(person) {
    var newStatue = new Statue(person.name);
      if (this.statues.length <= 2) {
        this.statues.push(newStatue);
    } else if (this.statues.length >= 3) {
      var revivedPerson = new Person(this.statues[0].name);
      this.statues.shift();
      this.statues.push(newStatue);
      revivedPerson.mood = 'relieved';
      return revivedPerson;
    }
  }
}




module.exports = Medusa;
