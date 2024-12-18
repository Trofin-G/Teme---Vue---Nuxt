class CodingChallenge_8 {
    // Link to Coding Challenge #8 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648309#notes

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
        const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
        const tips = [];
        const totals = [];

        const calcTip = function (value) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] >= 50 && value[i] <= 300) {
                    tips.push(Math.round(value[i] * 0.15));
                    totals.push(Math.round(value[i] + value[i] * 0.15));
                } else {
                    tips.push(Math.round(value[i] * 0.2));
                    totals.push(Math.round(value[i] + value[i] * 0.2));
                }
            }
        };

        calcTip(bills);

        const calcAverage = (avgValue) => {
            let sum = 0;
            avgValue.map((element) => {
                sum += element / avgValue.length;
            });
            return sum;
        };

        console.log("Bills without tips: ", bills);
        console.log("Tips:               ", tips);
        console.log("Total with tips:    ", totals);
        console.log("Average of all bills without tips: ", Math.round(calcAverage(bills)), "$");
        console.log("Average tips: ", Math.round(calcAverage(tips)), "$");
        console.log("Average of all bills with tips: ", Math.round(calcAverage(totals)), "$");
    }
}
