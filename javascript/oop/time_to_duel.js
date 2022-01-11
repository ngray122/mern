class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost, power, resiliance) {
        super(name, cost);
        this.power = power;
        this.resiliance = resiliance;

    }

    attack(target) {
        if (target instanceof Unit) {
            target.resiliance -= target.power
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}


class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude
    }



    play(target) {
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude
            // if(this.stat == "power"){
            //     target.power += this.magnitude
                
            // } else if (this.stat == "resiliance") {
            //     target.resiliance += this.magnitude
            // }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4) 
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4) 
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resiliance", 3);
const promiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resiliance", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);


hardAlgo.play(redBeltNinja);
console.log(redBeltNinja)
hardAlgo.play(redBeltNinja);
console.log(redBeltNinja)

promiseRejection.play(redBeltNinja)
console.log(redBeltNinja)

pairProgramming.play(redBeltNinja)
console.log(redBeltNinja)


redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja)
blackBeltNinja.attack(redBeltNinja);
console.log(redBeltNinja)
