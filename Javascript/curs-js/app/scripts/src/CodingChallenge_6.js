class CodingChallenge_6 {
    // Link to Coding Challenge #6 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648259#notes

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
        const bills = [125, 555, 44];
        const total = [];

        const calcTip = function (value) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] >= 50 && value[i] <= 300) {
                    total.push(Math.round(value[i] + value[i] * 0.15));
                } else {
                    total.push(Math.round(value[i] + value[i] * 0.2));
                }
            }
        };

        calcTip(bills);
        console.log(total);
    }
}
