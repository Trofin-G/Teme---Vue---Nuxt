class CodingChallenge_2 {
    // Link to Coding Challenge #2 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648177#questions

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

        let markHigherBMI = BMIJohn > BMIMarks ? `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMarks}).` : `Mark's BMI (${BMIMarks}) is higher than John's BMI (${BMIJohn}).`;

        console.log(markHigherBMI);
    }
}
