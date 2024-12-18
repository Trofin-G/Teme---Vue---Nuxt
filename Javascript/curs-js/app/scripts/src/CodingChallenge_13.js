class CodingChallenge_13 {
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

        const game = {
            team1: "Bayern Munich",
            team2: "Borrussia Dortmund",
            players: [
                ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
                ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
            ],
            score: "4:0",
            scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
            date: "Nov 9th, 2037",
            odds: {
                team1: 1.33,
                x: 3.25,
                team2: 6.5,
            },
        };

        // 1.
        const [players1, players2] = game.players;
        console.log("players1 - ", players1);
        console.log("players2 - ", players2);

        // 2.
        const [gk, ...filedPlayers] = players1;
        console.log("gk - ", gk);
        console.log("filedPlayers - ", filedPlayers);

        // 3.

        const allPlayers = [...players1, ...players2];
        console.log("allPlayers - ", allPlayers);

        // 4.
        const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
        console.log("players1Final - ", players1Final);

        // 5.
        const { team1, x: draw, team2 } = game.odds;
        console.log("team1 - ", team1);
        console.log("draw - ", draw);
        console.log("team2 - ", team2);

        // 6.
        const printGoals = (...players) => {
            console.log(`${players.length} goals were scored.`);
        };
        printGoals(...game.scored);

        // 7.
        team1 < team2 && console.log("Team 1 win");
        team1 > team2 && console.log("Team 2 win");
    }
}
