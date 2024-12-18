class CodingChallenge_9 {
    // Link to Coding Challenge #9 = https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648369#notes

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
        const arr = [12, 5, -5, 0, 4];
        let log = '';

        const printForecast = () => {
            arr.map((item) => {
                log += `... ${item}ºC in ${arr.indexOf(item) + 1} days `;
            });
            console.log(log);
        };
        
        printForecast();
    }
}
