class CodingChallenge_5 {
    // Link to Coding Challenge #5 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648243#notes

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
        const checkWinner = function (avgDolhins, avgKoalas) {
            console.log(avgDolhins, avgKoalas);
            if (avgKoalas > avgDolhins) {
                console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
            } else {
                console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
            }
        };

        const calcAverage = (a, b, c) => (a + b + c) / 3;

        const dolphinsScore = calcAverage(44, 23, 71);
        const koalasScore = calcAverage(65, 54, 49);

        checkWinner(Math.round(dolphinsScore), Math.round(koalasScore));
    }
}
