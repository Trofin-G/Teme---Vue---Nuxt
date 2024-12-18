class CodingChallenge_19_Project_4 {
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
        // Data
        this.account1 = {
            owner: "Jonas Schmedtmann",
            movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
            interestRate: 1.2, // %
            pin: 1111,
            movementsDates: [
                "2019-11-18T21:31:17.178Z",
                "2019-12-23T07:42:02.383Z",
                "2020-01-28T09:15:04.904Z",
                "2020-04-01T10:17:24.185Z",
                "2020-05-08T14:11:59.604Z",
                "2020-05-27T17:01:17.194Z",
                "2020-07-11T23:36:17.929Z",
                "2020-07-12T10:51:36.790Z",
            ],
            currency: "EUR",
            locale: "pt-PT", // de-DE
        };

        this.account2 = {
            owner: "Jessica Davis",
            movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
            interestRate: 1.5,
            pin: 2222,
            movementsDates: [
                "2019-11-01T13:15:33.035Z",
                "2019-11-30T09:48:16.867Z",
                "2019-12-25T06:04:23.907Z",
                "2020-01-25T14:18:46.235Z",
                "2020-02-05T16:33:06.386Z",
                "2020-04-10T14:43:26.374Z",
                "2020-06-25T18:49:59.371Z",
                "2020-07-26T12:01:20.894Z",
            ],
            currency: "USD",
            locale: "en-US",
        };

        this.account3 = {
            owner: "Steven Thomas Williams",
            movements: [200, -200, 340, -300, -20, 50, 400, -460],
            interestRate: 0.7,
            pin: 3333,
            movementsDates: [
                "2019-11-01T13:15:33.035Z",
                "2019-11-30T09:48:16.867Z",
                "2019-12-25T06:04:23.907Z",
                "2020-01-25T14:18:46.235Z",
                "2020-02-05T16:33:06.386Z",
                "2020-04-10T14:43:26.374Z",
                "2020-06-25T18:49:59.371Z",
                "2020-07-26T12:01:20.894Z",
            ],
            currency: "USD",
            locale: "en-US",
        };

        this.account4 = {
            owner: "Sarah Smith",
            movements: [430, 1000, 700, 50, 90],
            interestRate: 1,
            pin: 4444,
            movementsDates: [
                "2019-11-01T13:15:33.035Z",
                "2019-11-30T09:48:16.867Z",
                "2019-12-25T06:04:23.907Z",
                "2020-01-25T14:18:46.235Z",
                "2020-02-05T16:33:06.386Z",
            ],
            currency: "USD",
            locale: "en-US",
        };

        this.account5 = {
            owner: "Trofin Gabriel",
            movements: [3500, 1000, -650, -200, 1700, 4500, -4500, 3500],
            interestRate: 1,
            pin: 5555,
            movementsDates: [
                "2019-11-01T13:15:33.035Z",
                "2019-11-30T09:48:16.867Z",
                "2019-12-25T06:04:23.907Z",
                "2020-01-25T14:18:46.235Z",
                "2020-02-05T16:33:06.386Z",
                "2020-04-10T14:43:26.374Z",
                "2020-06-25T18:49:59.371Z",
                "2020-07-26T12:01:20.894Z",
            ],
            currency: "USD",
            locale: "en-US",
        };
        this.accounts = [this.account1, this.account2, this.account3, this.account4, this.account5];

        this.labelWelcome = document.querySelector(".welcome");
        this.labelDate = document.querySelector(".date");
        this.labelBalance = document.querySelector(".balance__value");
        this.labelSumIn = document.querySelector(".summary__value--in");
        this.labelSumOut = document.querySelector(".summary__value--out");
        this.labelSumInterest = document.querySelector(".summary__value--interest");
        this.labelTimer = document.querySelector(".timer");

        this.containerApp = document.querySelector(".app");
        this.containerMovements = document.querySelector(".movements");

        this.btnLogin = document.querySelector(".login__btn");
        this.btnTransfer = document.querySelector(".form__btn--transfer");
        this.btnLoan = document.querySelector(".form__btn--loan");
        this.btnClose = document.querySelector(".form__btn--close");
        this.btnSort = document.querySelector(".btn--sort");

        this.inputLoginUsername = document.querySelector(".login__input--user");
        this.inputLoginPin = document.querySelector(".login__input--pin");
        this.inputTransferTo = document.querySelector(".form__input--to");
        this.inputTransferAmount = document.querySelector(".form__input--amount");
        this.inputLoanAmount = document.querySelector(".form__input--loan-amount");
        this.inputCloseUsername = document.querySelector(".form__input--user");
        this.inputClosePin = document.querySelector(".form__input--pin");
    }

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;

        // Dates
        const today = new Date();
        const todayDate = `${today.getDate()}`.padStart(2, 0);
        const monthDate = `${today.getMonth() + 1}`.padStart(2, 0);
        const yearDate = today.getFullYear();
        const hourDate = today.getHours();
        const minutesDate = today.getMinutes();

        // Update UI
        const updateUI = () => {
            displayMovements(currentAccount);
            currentBalance(currentAccount);
        };

        // Reset
        const reset = () => {
            self.inputLoginUsername.value = "";
            self.inputLoginPin.value = "";
            self.inputTransferAmount.value = "";
            self.inputTransferTo.value = "";
            self.inputLoanAmount.value = "";
            self.inputCloseUsername.value = "";
            self.inputClosePin.value = "";
        };

        // Reset timer
        const resetTimer = () => {
            clearInterval(timer);
            timer = countdownTimerLoggedOut();
        };

        // Countdown Timer
        const countdownTimerLoggedOut = () => {
            let time = 600; // setat in secunde

            const tick = () => {
                const second = String(time % 60).padStart(2, 0);
                const minute = String(Math.trunc(time / 60)).padStart(2, 0);

                self.labelTimer.textContent = `${minute}:${second}`;
                time--;

                if (time < 0) {
                    clearInterval(timer);
                    self.labelWelcome.textContent = "Log in to get started";
                    self.containerApp.style.opacity = 0;
                }
            };

            const timer = setInterval(tick, 1000);
            return timer;
        };

        // Formateaza moneda si valoarea
        const formattingCurrency = (value, locale, currency) => {
            return new Intl.NumberFormat(locale, {
                style: "currency",
                currency: currency,
            }).format(value);
        };

        // Afisam tranzactiile pe pagina
        const displayMovements = (acc, sort = false) => {
            self.containerMovements.innerHTML = "";

            // Sortarea descendenta
            const sortingMovements = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

            sortingMovements.forEach((item, i) => {
                const type = item > 0 ? "deposit" : "withdrawal";

                // Setam data pentru fiecare rand
                const date = new Date(acc.movementsDates[i]);
                const day = `${date.getDate()}`.padStart(2, 0);
                const month = `${date.getMonth() + 1}`.padStart(2, 0);
                const year = date.getFullYear();
                const displayDate = `${day}/${month}/${year}`;

                const formattedMov = formattingCurrency(item, acc.locale, acc.currency);

                const movementRow = `
                <div class="movements__row">
                    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                    <div class="movements__date">${displayDate}</div>
                    <div class="movements__value">${formattedMov}</div>
                </div>
                `;

                self.containerMovements.insertAdjacentHTML("afterbegin", movementRow);
            });
        };

        // Afisam balanta - depozitarii, retragerii, dobanda
        const currentBalance = (acc) => {
            let depositBalance = 0;
            let withdrawalBalance = 0;

            acc.movements.forEach((item) => {
                if (item > 0) {
                    depositBalance += item;
                } else {
                    withdrawalBalance += item;
                }
            });

            const withdrawalInt = Math.abs(withdrawalBalance);
            acc.totalBalance = depositBalance - withdrawalInt;

            // Formatam moneda si valoarea
            const formattedBalance = formattingCurrency(acc.totalBalance, acc.locale, acc.currency);
            const formattedIn = formattingCurrency(depositBalance, acc.locale, acc.currency);
            const formattedOut = formattingCurrency(withdrawalInt, acc.locale, acc.currency);
            const formattedInterest = formattingCurrency((depositBalance * acc.interestRate) / 100, acc.locale, acc.currency);

            self.labelSumIn.textContent = `${formattedIn}`;
            self.labelSumOut.textContent = `${formattedOut}`;
            self.labelSumInterest.textContent = `${formattedInterest}`;
            self.labelBalance.textContent = `${formattedBalance}`;
        };

        // Creăm si adaugam username la conturi/obiecte
        const createUsernames = (accs) => {
            accs.forEach((acc) => {
                acc.username = acc.owner
                    .toLowerCase()
                    .split(" ")
                    .map((name) => name[0])
                    .join("");
            });
        };
        createUsernames(self.accounts);

        // Functia de login, verificam daca username-ul si parola exista si sunt valide
        // Daca sunt valide, afisam continutul contului introdus

        let currentAccount, timer;
        this.btnLogin.addEventListener("click", (e) => {
            e.preventDefault();

            currentAccount = self.accounts.find((acc) => acc.username === self.inputLoginUsername.value);
            if (currentAccount?.pin === Number(self.inputLoginPin.value)) {
                // Reset
                reset();
                self.inputLoginPin.blur();

                // Reset timer
                resetTimer();

                // Update UI
                updateUI();

                self.containerApp.style.opacity = "1";
                self.labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}!`;

                // Timpul autentificarii
                const timeFormat = hourDate >= 12 ? "PM" : "AM";
                self.labelDate.textContent = `${todayDate}/${monthDate}/${yearDate}, ${hourDate}:${minutesDate} ${timeFormat}`;
            } else {
                // mesaj ca parola nu e buna
                alert("Username-ul sau parola este incorecta.");
            }
        });

        // Functia de transfer bani in alte conturi
        this.btnTransfer.addEventListener("click", (e) => {
            e.preventDefault();

            const amount = Number(self.inputTransferAmount.value);
            const transferTo = self.accounts.find((acc) => acc.username === self.inputTransferTo.value);

            if (amount > 0 && amount <= currentAccount.totalBalance && transferTo) {
                currentAccount.movements.push(-amount);
                transferTo.movements.push(amount);
                currentAccount.movementsDates.push(new Date());
                transferTo.movementsDates.push(new Date());

                // Update UI
                updateUI();

                // Reset
                reset();

                // Reset timer
                resetTimer();
            } else {
                // mesaj ca transferul nu e ok
                alert("Transferul nu s-a efectuat.");
            }
        });

        // Functia de imprumut
        // Conditie: trebuie sa fie macar o depozitare de 10% a imprumutului ca acesta sa se realizeze
        this.btnLoan.addEventListener("click", (e) => {
            e.preventDefault();

            const amount = self.inputLoanAmount.value;
            const checkDeposits = currentAccount.movements.some((val) => val > 0.1 * amount);

            if (amount > 0 && checkDeposits) {
                currentAccount.movements.push(Number(amount));
                currentAccount.movementsDates.push(new Date());

                // Update UI
                updateUI();

                // Reset
                reset();

                // Reset timer
                resetTimer();
            } else {
                alert("Nu exista nici o depozitare de min. 10% a imprumutului cerut sau suma este negativa");
            }
        });

        // Functia de delete cont
        this.btnClose.addEventListener("click", (e) => {
            e.preventDefault();

            const confirmUser = currentAccount.username === self.inputCloseUsername.value;
            const confirmPin = currentAccount.pin == self.inputClosePin.value;

            if (confirmUser && confirmPin) {
                alert("Contul a fost sters!");

                const index = this.accounts.findIndex((acc) => acc.username === currentAccount.username);
                self.accounts.splice(index, 1);

                //Reset
                reset();
                self.containerApp.style.opacity = "0";
            } else {
                alert("Contul nu s-a putut sterge, username-ul sau parola sunt gresite!");
            }
        });

        // Sortarea: schimbarea valorii elementului boolean
        let sort;
        this.btnSort.addEventListener("click", (e) => {
            e.preventDefault();

            displayMovements(currentAccount, !sort);
            sort = !sort;
        });
    }
}
