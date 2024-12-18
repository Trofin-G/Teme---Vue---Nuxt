class CodingChallenge_4 {
    // Link to Coding Challenge #4 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648207#questions

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
        const billValue = 430;

        const tip =
            billValue >= 50 && billValue <= 300
                ? `The bill was ${billValue}, the tip was ${billValue * 0.15}, and the total value ${billValue + billValue * 0.15}.`
                : `The bill was ${billValue}, the tip was ${billValue * 0.2}, and the total value ${billValue + billValue * 0.2}.`;

        console.log(tip);
    }
}
