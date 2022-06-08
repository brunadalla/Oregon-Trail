class Traveler {
    constructor(name) {
        this.name      = name;
        this.food      = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.food += 2
    }

    eat() {

        if (this.food > 0) {
            this.food --
            this.isHealthy = true
        } 
        else {
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity   = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join(newPassenger){
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(newPassenger)
        }
    }

    shouldQuarantine() {
       return this.passengers.some(person => person.isHealthy === false) 
    }

    totalFood() {
        return this.passengers.reduce((acc, currentValue) => {return acc + currentValue.food}, 0)
    }
}
