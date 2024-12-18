class CodingChallenge_12_Project_3 {
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
    handleDOM() {
        this.resetBtn = document.querySelector(".btn--new");
        this.rollDiceBtn = document.querySelector(".btn--roll");
        this.holdBtn = document.querySelector(".btn--hold");

        this.player = document.querySelectorAll(".player");
        this.playerOne = document.querySelector(".player--0");
        this.playerTwo = document.querySelector(".player--1");
        this.diceImg = document.querySelector(".dice");
    }

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;
        let currentScore = 0;
        let activePlayer = 0;
        let holdScores = [0, 0];

        const switchPlayer = () => {
            currentScore = 0;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
            activePlayer = activePlayer === 0 ? 1 : 0;
            self.playerOne.classList.toggle("player--active");
            self.playerTwo.classList.toggle("player--active");
        };

        this.rollDiceBtn.addEventListener("click", () => {
            let diceNumber = Math.trunc(Math.random() * 6) + 1;
            self.diceImg.classList.add("show");
            self.diceImg.setAttribute("src", `images/project-3/dice-${diceNumber}.png`);

            if (diceNumber !== 1) {
                currentScore += diceNumber;
                document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
            } else {
                switchPlayer();
            }
        });

        this.holdBtn.addEventListener("click", () => {
            holdScores[activePlayer] += currentScore;
            document.querySelector(`#score--${activePlayer}`).textContent = holdScores[activePlayer];
            document.querySelector(`.player--${activePlayer} .current`).classList.remove("errorZero");

            if (holdScores[activePlayer] >= 100) {
                document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
                document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
                self.rollDiceBtn.classList.add("input-disable");
                self.holdBtn.classList.add("input-disable");
            } else {
                switchPlayer();
            }
        });

        this.resetBtn.addEventListener("click", () => {
            currentScore = 0;
            activePlayer = 0;
            holdScores = [0, 0];
            self.playerOne.classList.add("player--active");
            self.playerTwo.classList.remove("player--active");
            self.playerOne.classList.remove("player--winner");
            self.playerTwo.classList.remove("player--winner");
            self.diceImg.classList.remove("show");
            document.querySelector(`#current--0`).textContent = 0;
            document.querySelector(`#current--1`).textContent = 0;
            document.querySelector(`#score--0`).textContent = 0;
            document.querySelector(`#score--1`).textContent = 0;
            self.rollDiceBtn.classList.remove("input-disable");
            self.holdBtn.classList.remove("input-disable");
        });
    }
}
