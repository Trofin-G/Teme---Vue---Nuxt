/*
Am revenit cu urmatoarea tema, si anume: Folosind Javascript/jQuery implementeaza un joc de tipul Hangman.

**Cerinta:**
Alfabetul trebuie sa fie generat in mod dinamic
La incarcarea paginii se alege random un cuvant
Numarul de spatii pentru completat va fi “desenat” in functie de cate caractere are cuvantul ales random
Numarul maxim de sanse este 3
Literele gresite sa fie scoase in evidenta si afisate intr-o lista
O data cu introducerea unei litere gresite, se scad sansele (sa fie vizibila aceasta actiune)
Literele pot fi selectate la click/tap sau keypress (fii atent la exceptii)
Daca s-a ghicit cuvantul se afiseaza un bootstrap alert cu un mesaj si apare un buton “Play again” care da refresh la pagina
Layout-ul jocului sa fie unul user-friendly si intuitiv
*/

class Hangman_Tema_18 {
    constructor() {
        if ($(".tema-18").length === 0) {
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
        this.wordContainer = document.querySelector(".word-section");
        this.lettersContainer = document.querySelector(".letters-section");
        this.overlay = document.querySelector(".overlay");
        this.wingame = document.querySelector(".alert-success");
        this.gameover = document.querySelector(".alert-danger");
        this.tryAgainBtn = document.querySelectorAll(".try-again-btn");
        this.wordWin = document.querySelector(".alert-success h4");
        this.wordGameover = document.querySelector(".alert-danger h4");
        this.userLife = document.querySelector(".life2");
        this.imageHangman = document.querySelector(".image");
    }

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;
        let guessedWord = [];
        let counterLife = 2;

        // Genereaza alfabetul
        const alpha = Array.from(Array(26)).map((e, i) => i + 97);
        const alphabet = alpha.map((x) => String.fromCharCode(x)).reverse();

        // Genereaza un cuvant random din array-ul 'words'
        const words = ["cuvant", "scaun", "masina", "cana", "apel", "animal"];
        let randomWordSplited = [];
        const randomWord = [...words[Math.floor(Math.random() * words.length)]];

        randomWord.forEach((element) => {
            randomWordSplited.push(element);
        });
        randomWordSplited.reverse();
        console.log(randomWordSplited, "randomWordSplited");

        // Afiseaza cuvantul random
        randomWordSplited.map((el) => {
            const wordTemp = `
                    <p class='wordLetter' data-check="false">${el}</p>
                `;
            self.wordContainer.insertAdjacentHTML("afterbegin", wordTemp);
        });
        const randomWordJoined = randomWordSplited.reverse().join("");

        // Afiseaza alfabetul
        alphabet.map((el) => {
            const alphabetTemp = `
                    <button type="button" class="btn btn-secondary">${el}</button>
                `;
            self.lettersContainer.insertAdjacentHTML("afterbegin", alphabetTemp);
        });

        // Selecteaza litera
        this.lettersContainer.addEventListener("click", (e) => {
            const clicked = e.target.closest(".btn-secondary");
            if (!clicked) return;
            let keySelected = clicked.textContent;

            updatePack(keySelected);
        });

        document.addEventListener("keyup", (e) => {
            if (alphabet.includes(e.key)) {
                let keySelected = e.key;

                updatePack(keySelected);
            }
        });

        const updatePack = (keySelected) => {
            disabledLetter(keySelected);
            winHandler(keySelected);
            loseHandler(keySelected);
            userLifeHandler();
        };

        // Dezactiveaza literele folosite
        const disabledLetter = (keySelected) => {
            document.querySelectorAll(".btn-secondary").forEach((el) => {
                if (el.textContent === keySelected) {
                    el.classList.add("correctLetter");
                }
            });
        };

        // Afiseaza literele corecte din cuvant si afiseaza mesajul de castig si butonul de 'joaca din nou'
        const winHandler = (keySelected) => {
            document.querySelectorAll(".wordLetter").forEach((el) => {
                if (el.textContent === keySelected) {
                    el.style.visibility = "visible";
                }

                if (el.style.visibility === "visible" && el.getAttribute("data-check") === "false") {
                    el.setAttribute("data-check", "true");
                    guessedWord.push(el.textContent);
                }
            });

            if (randomWordSplited.length === guessedWord.length && randomWordSplited.every((val) => guessedWord.includes(val))) {
                self.wordWin.textContent = `Cuvantul: ${randomWordJoined}`;
                self.wingame.classList.remove("hidden");
                self.overlay.classList.remove("hidden");
            }
        };

        // Afiseaza viata si schimba imaginea
        const userLifeHandler = () => {
            let currentLife = counterLife + 1;
            self.userLife.textContent = `Viata curenta: ${currentLife}`;

            if (currentLife === 2) {
                self.imageHangman.setAttribute("src", "images/tema-18/hangman_1.png");
            } else if (currentLife === 1) {
                self.imageHangman.setAttribute("src", "images/tema-18/hangman_2.png");
            } else if (currentLife === 0) {
                self.imageHangman.setAttribute("src", "images/tema-18/hangman_3.png");
            }
        };

        // Afiseaza mesajul de pierdere si butonul de 'joaca din nou'
        const loseHandler = (keySelected) => {
            if (!randomWordSplited.includes(keySelected)) {
                if (counterLife !== 0) {
                    counterLife--;
                } else {
                    self.wordGameover.textContent = `Cuvantul: ${randomWordJoined}`;
                    self.gameover.classList.remove("hidden");
                    self.overlay.classList.remove("hidden");
                }
            }
        };

        // Refrash page
        this.tryAgainBtn.forEach((el) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.reload();
            });
        });
    }
}
