class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;

    }

    attack(target) {
        target.res -= power

    }
}


class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4) 
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4) 


const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", +3)
const promiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", +2)

