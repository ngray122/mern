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
        console.log(`Ninja Stats - Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake() {
        this.health += 10 
        console.log(`Your health has been increased by 10 and is now ${this.health} `)

    }

}

const ninja1 = new Ninja("Jackie", 7);
console.log(ninja1)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();


