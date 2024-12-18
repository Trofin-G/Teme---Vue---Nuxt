class CodingChallenge_24 {
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

        class CarClass {
            constructor(make, speed) {
                this.make = make;
                this.speed = speed;
            }

            accelerate() {
                this.speed += 10;
                console.log(`${this.make} is going at ${this.speed} km/h`);
            }

            brake() {
                this.speed -= 5;
                console.log(`${this.make} is going at ${this.speed} km/h`);
                return this;
            }

            get speedUS() {
                return this.speed / 1.6;
            }

            set speedUS(speed) {
                this.speed = speed * 1.6;
            }
        }

        class EVCl extends CarClass {
            #charge;
            constructor(make, speed, charge) {
                super(make, speed);
                this.#charge = charge;
            }

            chargeBattery(chargeTo) {
                this.#charge = chargeTo;
                return this;
            }

            accelerate() {
                this.speed += 20;
                this.#charge--;
                console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
                return this;
            }
        }

        const rivian = new EVCl("Rivian", 120, 23);
        console.log(rivian);
        rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

        console.log(rivian.speedUS);
    }
}
