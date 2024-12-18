class Notes_Section_12 {
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
        console.log(`------------------------------Math and Rounding------------------------------`);
        // Afli valoarea unui numar patrat
        const sqrtNumber = Math.sqrt(25);
        console.log(sqrtNumber, "Numar patrat");

        // Afli min-ul sau max-ul
        const min = Math.min(5, 18, 23, 11, 2);
        console.log(min, "min");

        const max = Math.max(5, 18, 23, 11, 2);
        console.log(max, "max");

        // Calzulezi area unui cerc (parseFloat este raza cercului)
        const areaCerc = Math.PI * Number.parseFloat("10") ** 2;
        console.log(areaCerc, "aria cercului");

        // Obtii un numar random
        const randomNumber = Math.trunc(Math.random() * 6) + 1; // obtii un numar random intr 1 si 6
        console.log(randomNumber, "numar random");

        // O functie careia ii dai 2 valori si iti genereaza un numar random intre acele 2 valori
        const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
        console.log(randomInt(10, 20), "nr random intre 2 valori"); // o sa genereze un nr random intre 10 si 20

        // Rotunjeste la cea mai mica valoare
        const lowVal = Math.trunc(23.3);
        console.log(lowVal, "Sterge decimalele");

        const lowVal2 = Math.floor(23.7);
        console.log(lowVal2, "Sterge decimalele daca valoarea este pozitiva, daca este negativa rotunjeste numarul la cea mai mica val");

        // Rotunjeste la cea mai mare valoare
        const maxVal = Math.ceil(23.3);
        console.log(maxVal, "Valoarea cea mai mare");

        // Rotunjeste la cea mai apropiata valoare
        const progVal = Math.round(23.3);
        console.log(progVal, "rotunjeste la cea mai apropiata valoare");

        const progVal2 = Math.round(23.5);
        console.log(progVal2, "rotunjeste la cea mai apropiata valoare");

        // Pentru a afisa sau a schimba nr de decimale la un numar
        const addDecimals = 23.32;
        console.log(addDecimals.toFixed(1));

        console.log(`------------------------------Creating Dates------------------------------`);

        const today = new Date();
        const day = `${today.getDate()}`.padStart(2, 0);
        const month = `${today.getMonth() + 1}`.padStart(2, 0);
        const year = today.getFullYear();
        const hour = today.getHours();
        const minutes = today.getMinutes();

        console.log(`------------------------------setTimeout and setInterval ------------------------------`);

        setTimeout(() => {
            console.log("Here is your pizza");
        }, 3000);

        setInterval(() => {
            // console.log("Test la secunda");
        }, 1000);
    }
}

