class Runner {
  constructor(name, age,) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(milesLogged) {
    this.milesRun += milesLogged;
    this.fitness += milesLogged;
  }
  stretch() {
    this.fitness += 0.5;
  }
  runRace(race, milesLogged) {
    this.completedRaces.push(race);
    this.runSomeMiles(milesLogged)
  }
}

module.exports = Runner;
