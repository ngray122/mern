class Ninja {
    constructor(name, health, speed, strength ) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(`My name is ${this.name}`)
    }
    
    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake() {
        this.health += 10 
        console.log(`Your health has been increased by 10 and is now ${this.health} `)

    }

}

const ninja1 = new Ninja("Jackie Chan", 7);
console.log(ninja1)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();


class Sensi extends Ninja {
    constructor(wisdom) {
        super("Bruce Lee", 200, 10, 10)
        this.wisdom = 10
    }

    speakWisdom() {
        this.drinkSake();
        console.log(`Never eat the yellow snow, 10 health has been added! Your health is now ${this.health}`)
    }
}

const sensi1 = new Sensi("Bruce Lee");
sensi1.speakWisdom();
console.log(sensi1);
sensi1.showStats();
sensi1.sayName();