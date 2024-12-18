class CodingChallenge_3 {
    // Link to Coding Challenge #3 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648193#questions

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
        const dolphinsScore = [97, 112, 101];
        const koalasScore = [109, 95, 106];

        let dolphinsAvg = 0;
        let koalasAvg = 0;

        for (let i = 0; i < dolphinsScore.length; i++) {
            dolphinsAvg += dolphinsScore[i] / dolphinsScore.length;
        }

        for (let i = 0; i < koalasScore.length; i++) {
            koalasAvg += koalasScore[i] / koalasScore.length;
        }

        if (dolphinsAvg === koalasAvg && dolphinsAvg > 100 && koalasAvg > 100) {
            console.log(`The teams have same average score, it's a draw! Dolphins ${Math.round(dolphinsAvg)}-${Math.round(koalasAvg)} Koalas`);
        } else if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
            console.log(`The winner are Dolphins with a score of ${Math.round(dolphinsAvg)}`);
        } else if((dolphinsAvg < koalasAvg && koalasAvg > 100)) {
            console.log(`The winner are Koalas with a score of ${Math.round(koalasAvg)}`);
        } else {
            console.log(`There are no winner!`);
        }
    }
}
