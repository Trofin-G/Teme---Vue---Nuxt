/*
Am revenit cu urmatoarea tema, si anume: Implementeaza jocul Tic-Tac-Toe (X si 0) folosind Javascript/jQuery..

**Cerinta:**
Layout user friendly
Afisare modal pentru:
A castigat jucatorul X
A astigat jucatorul 0
Egalitate
Mesaje informative (toast):
Incepe X/0
Este randul jucatorului X/0
Dupa finalizarea jocului, va aparea un buton de “Play again” prin care se reseteaza jocul (nu se da refresh la pagina).
*/

class XO_Tema_24 {
    constructor() {
        if ($(".tema-24").length === 0) {
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
        this.cellContainer = document.querySelector(".board");
        this.cells = document.querySelectorAll(".cell");
        this.activePlayer = document.querySelector(".active-player");
        this.model = document.querySelector(".modal");
        this.overlay = document.querySelector(".overlay");
        this.showWinner = document.querySelector(".modal p");
        this.resetBtn = document.querySelector(".btn-primary");
    }

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;

        const winningPositions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let winningPositionsEmptyArr = ["", "", "", "", "", "", "", "", ""];


        // Genereaza random un numar intre X si O
        let activePlayer = Math.trunc(Math.random() * 2) === 1 ? "X" : "O";
        self.activePlayer.textContent = `Primul care alege este: ${activePlayer}`;

        // La click va schimba player-ul
        const switchPlayer = () => {
            activePlayer = activePlayer == "X" ? "O" : "X";
        };

        // Afiseaza activePlayer-ul
        this.cellContainer.addEventListener("click", (e) => {
            const clicked = e.target.closest(".cell");
            if (!clicked) return;
            const cellDataId = clicked.getAttribute("data-cell");
            
            if (winningPositionsEmptyArr[cellDataId] == "") {
                winningPositionsEmptyArr[cellDataId] = activePlayer;
                clicked.textContent = activePlayer;
                self.activePlayer.textContent = `Este randul jucatorului: "${activePlayer == "X" ? "O" : "X"}"`;
                
                switchPlayer();
                checkWinner();
                console.log(winningPositionsEmptyArr, 'winningPositionsEmptyArr');
            }
        });

        // Verifica daca exista un castigator
        const checkWinner = () => {
            for (let i = 0; i < winningPositions.length; i++) {
                const position = winningPositions[i];
                const positionOne = winningPositionsEmptyArr[position[0]];
                const positionTwo = winningPositionsEmptyArr[position[1]];
                const positionThree = winningPositionsEmptyArr[position[2]];

                // Verifica daca empty arry-ul are valori sau nu
                if (positionOne == "" || positionTwo == "" || positionThree == "") {
                    continue;
                }

                // Verifica daca un array din cele 8 este pozitiv
                // Afiseaza modalul cu castigatorul sau remiza
                if (positionOne == positionTwo && positionTwo == positionThree) {
                    self.showWinner.textContent = `Jucatorul: "${activePlayer == "X" ? "O" : "X"}" a castigat!`;
                    self.model.classList.remove("hidden");
                    self.overlay.classList.remove("hidden");
                } else if (!winningPositionsEmptyArr.includes("")) {
                    self.showWinner.textContent = "Remiza!";
                    self.model.classList.remove("hidden");
                    self.overlay.classList.remove("hidden");
                }
            }
        };

        // Reseteaza jocul
        this.resetBtn.addEventListener("click", () => {
            self.cells.forEach((item) => (item.textContent = ""));
            winningPositionsEmptyArr = ["", "", "", "", "", "", "", "", ""];
            self.model.classList.add("hidden");
            self.overlay.classList.add("hidden");
            activePlayer = Math.trunc(Math.random() * 2) === 1 ? "X" : "O";
            self.activePlayer.textContent = `Primul care alege este: ${activePlayer}`;
        });
    }
}
