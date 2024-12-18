class CodingChallenge_7 {
    // Link to Coding Challenge #7 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648281#notes

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
        const firstPerson = {
            firstName: "Mark",
            lastName: "Miller",
            mass: "78",
            height: "1.69",
            calcBMI: function () {
                this.bmi = this.mass / this.height ** 2;
                return this.bmi;
            },
        };
        const secondPerson = {
            firstName: "John",
            lastName: "Smith",
            mass: "92",
            height: "1.95",
            calcBMI: function () {
                this.bmi = this.mass / this.height ** 2;
                return this.bmi;
            },
        };

        const getSummary = () => {
            if (firstPerson.calcBMI() > secondPerson.calcBMI()) {
                console.log(`${firstPerson.firstName}'s BMI (${Math.round(firstPerson.calcBMI())}) is higher than ${secondPerson.firstName}'s (${Math.round(secondPerson.calcBMI())})!`);
            } else {
                console.log(`${secondPerson.firstName}'s BMI (${Math.round(secondPerson.calcBMI())}) is higher than ${firstPerson.firstName}'s (${Math.round(firstPerson.calcBMI())})!`);
            }
        };

        getSummary(firstPerson, secondPerson);
    }
}
