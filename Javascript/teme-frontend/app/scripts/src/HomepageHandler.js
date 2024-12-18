class HomepageHandler {
    constructor() {
        if ($(".homepage").length === 0) {
            return;
        }

        this.init();
        this.handleDOM();
        this.handleEvents();
    }

    /**
     * Declare global variables
     */
    init() {}

    /**
     * Handle DOM queries
     */
    handleDOM() {
        // this.homepageContainer = document.querySelector('.homepage-wrapper')
    }

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;

        // const displayingData = () => {
        //     const projectsTemp = `
                
        //     `

            // self.homepageContainer.insertAdjacentHTML("afterbegin", listTemp);

        // }
        // displayingData();
    }
}
