class Ninja {
    constructor(name) {
        this.name = name
        this.health = 90
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(`My name is ${this.name}`)
        return this;
    }

    showStats() {
        console.table(this)
        return this;
    }

    drinkSake() {
        console.log("Drinking this sake will add", this.health)
        this.health += 10;
        console.log("The ninjas new health: ", this.health)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();