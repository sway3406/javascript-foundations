class Roadrace {
  constructor(raceObj) {
    this.name = raceObj.title;
    this.location = raceObj.city;
    this.distance = 0;
    this.participants = [];

  }
  setDistance(raceDistance) {
    this.distance = raceDistance;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }
  registerParticipants(runner) {
    this.participants.push(runner);
  }
  completeRace() {
    for(var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance);
    }
  }
}
//The code is less DRY than line 18
// this.participants[i].completedRaces.push(this.name);
// this.participants[i].runSomeMiles(this.distance);

module.exports = Roadrace
