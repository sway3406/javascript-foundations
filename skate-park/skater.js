var SkatePark = require('./skatepark.js');

class Skater {
    constructor(skaterObj) {
        this.name = skaterObj.name;
        this.skill = skaterObj.skill;
        this.tricks = skaterObj.tricks;
        this.money = skaterObj.cash;
        this.frustration = 0;
    }
    practice(tricks) {
        console.log(tricks)
        console.log(this.tricks)
        console.log(this.tricks.kickflip)
        for (var i = 0; i < this.tricks; i++) {
            
        }
    }
}
module.exports = Skater;