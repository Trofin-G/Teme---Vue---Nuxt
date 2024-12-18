class CodingChallenge_26 {
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

        const currentPosition = (lat, lng) => {
            fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
                .then((response) => {
                    if (!response.ok) throw new Error(`${response.status}`);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    return fetch(`https://restcoutries.eu/rest/v2/name/${data.country}`);
                })
                .then((response) => {
                    if (!response.ok) throw new Error(`Tara gresita (${response.status})`);
                    return response.json();
                })
                .then((data) => console.log(data[0]))
                .catch((error) => console.error(`${error.message}`));
        };

        currentPosition(52.508, 13.381);
        // currentPosition(19.037, 72.873);
        // currentPosition(-33.933, 18.474);
    }
}
