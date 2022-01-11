class Ninja {
    constructor() {
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
        return this.health

    }

}