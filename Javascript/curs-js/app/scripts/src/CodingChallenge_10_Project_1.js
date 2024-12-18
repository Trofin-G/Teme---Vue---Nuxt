class CodingChallenge_10_Project_1 {
    constructor() {
        if (jQuery(".project-1").length === 0) {
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
        this.bodyColor = document.querySelector("body");
        this.checkInput = document.querySelector(".check");
        this.resetInput = document.querySelector(".again");
        this.numberGuessed = document.querySelector(".guess");
        this.numberLabel = document.querySelector(".number");
        this.messageLabel = document.querySelector(".message");
        this.scoreLabel = document.querySelector(".score");
        this.highscoreLabel = document.querySelector(".highscore");
    }

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;
        let secretNumber = Math.trunc(Math.random() * 20) + 1;
        let startScore = 20;
        let highscore = 0;

        this.checkInput.addEventListener("click", () => {
            if (self.numberGuessed.value == secretNumber && self.numberGuessed.value <= 20 && self.numberGuessed.value >= 1) {
                self.bodyColor.classList.add("win-active");
                self.checkInput.classList.add("input-disable");
                self.numberLabel.textContent = self.numberGuessed.value;
                self.messageLabel.textContent = "Correct Number!";

                if (secretNumber > highscore) {
                    highscore = self.numberGuessed.value;
                    self.highscoreLabel.textContent = highscore;
                }
            } else if (startScore < 1) {
                self.bodyColor.classList.add("lost-active");
                self.checkInput.classList.add("input-disable");
                self.messageLabel.textContent = "You lost the game!";
            } else if (self.numberGuessed.value != secretNumber && self.numberGuessed.value <= 20 && self.numberGuessed.value >= 1) {
                self.numberLabel.textContent = self.numberGuessed.value;
                startScore--;
                self.scoreLabel.textContent = startScore;

                if (self.numberGuessed.value > secretNumber) {
                    self.messageLabel.textContent = "To high!";
                } else if (self.numberGuessed.value < secretNumber) {
                    self.messageLabel.textContent = "To low!";
                }
            } else if (self.numberGuessed.value == "") {
                self.messageLabel.textContent = "No number!";
            } else {
                alert("The number is not between 1 and 20!");
            }
        });

        this.resetInput.addEventListener("click", () => {
            secretNumber = Math.trunc(Math.random() * 20) + 1;
            startScore = 20;
            self.bodyColor.classList.remove("win-active");
            self.bodyColor.classList.remove("lost-active");
            self.checkInput.classList.remove("input-disable");
            self.numberLabel.textContent = "?";
            self.messageLabel.textContent = "Start guessing...";
            self.scoreLabel.textContent = "20";
            self.numberGuessed.value = "";
        });
    }
}
