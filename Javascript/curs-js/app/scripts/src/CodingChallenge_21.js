class CodingChallenge_21 {
    constructor() {
        this.init();
        this.handleDOM();
        // this.handleEvents();
    }

    /**
     * Declare global variables
     */
    init() {}

    /**
     * Handle DOM queries
     */
    handleDOM() {}

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;

        // Constructor function
        const Car = function (make, speed) {
            this.make = make;
            this.speed = speed;
        };

        Car.prototype.accelerate = function () {
            this.speed += 10;
            console.log(`${this.make} is going at ${this.speed} km/h`);
        };

        Car.prototype.brake = function () {
            this.speed -= 5;
            console.log(`${this.make} is going at ${this.speed} km/h`);
        };

        const bmw = new Car("BMW", 120);
        const mercedes = new Car("Mercedes", 95);

        bmw.accelerate();
        bmw.brake();
        bmw.brake();
        bmw.brake();
        bmw.brake();
        bmw.brake();
        bmw.brake();
        bmw.accelerate();
    }
}
