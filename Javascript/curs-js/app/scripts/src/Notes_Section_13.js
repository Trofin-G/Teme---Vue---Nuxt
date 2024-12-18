class Notes_Section_13 {
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

        // Codul sincron - codul se executa line cu line in ordinea in care am definit codul.
        // Codul asincron - codul se executa dupa ce task-ul ce ruleaza in spate (background) este terminat.
        // Ex asincron:
        // const p = document.querySelector(".p");
        // setTimeout(function () {
        //     p.textContent = "Test asincron";
        // }, 5000);
        // p.getElementsByClassName.color = "red";

        //API - Application Programming Interface - Realizeaza comunicarea intre 2 canale.

        // Exemplu de ajax call
        const request = new XMLHttpRequest();
        request.open("GET", "https://restcountries.com/v2/name/portugal");
        request.send();

        request.addEventListener("load", function () {
            const [data] = JSON.parse(this.responseText);
            // console.log(data);
        });

        // Exemplu de fetch call

        // Fetch-ul returneaza imediat un promise
        // Prommises - Este un obiect folosit ca un placeholder pentru rezultatul viitor al unei operatii asincrone
        // Promise-ul poate avea 3 stari:
        // - rejected care inseamna ca operatia a dat fail si aici dam un mesaj de eroare
        // - pending care e starea initiala, adica nu e nici rejected, nici fullfilled
        // - fulfilled/resolved adica operatia a avut succes si se pot aplica actiuni async await

        // In principal luam un request cu fetch, apoi transformam datele, de ex: daca e un JSON in
        // transformam in asa fel incat sa putem lua datele cu async await si apoi putem folosi datele.
        const getCountryData = (country) => {
            fetch(`https://restcountries.com/v2/name/${country}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data[0]);
                    const neighbour = data[0].borders[0];

                    if (!neighbour) return;

                    return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
                })
                .then((response) => response.json())
                .then((data) => console.log(data, "neighbour"))
                .catch((err) => console.error(`${err}`));
        };

        // getCountryData("usa");

        // adugand async unei functie obtinem = o functie care ruleaza in background si care ruleaza condul ce este in interiorul ei,
        // iar dupa ce aceasta a rulat returneaza automat un promis

        // await - este utilizat ca sa astepte rezultatul acestui promise
        // await o sa opreasca executarea codului la linia lui pana cand promise-ul este rezolvat/fulfilled
        const whereAmI = async function (country) {
            try {
                const res = await fetch(`https://restcountries.com/v2/name/${country}`);
                const data = await res.json();
            } catch {
                alert(error.message);
            }
            console.log(data[0]);
            console.log(res);
        };
        whereAmI("portugal");
        whereAmI("usa");
        whereAmI("romania");
        console.log("test");

        // try-catch - folosim pentru prinderea erorilor
        try {
            let y = 1;
            const x = 2;
            y = 3;
        } catch (error) {
            alert(error.message);
        }
    }
}
