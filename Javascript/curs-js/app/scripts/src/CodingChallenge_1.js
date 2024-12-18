class CodingChallenge_1 {
    // Link to Coding Challenge #1 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648161#questions

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
        const marksHeight = 1.88;
        const marksMass = 95;

        const johnHeight = 1.76;
        const johnMass = 85;

        const BMIJohn = marksMass / marksHeight ** 2;
        const BMIMarks = johnMass / johnHeight ** 2;

        let markHigherBMI = BMIJohn > BMIMarks ? "John has a greater BMI" : "Marks has a greater BMI";

        console.log(BMIJohn, BMIMarks, markHigherBMI);
    }
}
