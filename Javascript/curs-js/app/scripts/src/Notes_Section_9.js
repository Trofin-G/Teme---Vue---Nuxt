class Notes_Section_9 {
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
        const restaurant = {
            name: "Classico Italiano",
            location: "Via Angelo Tavanti 23, Firenze, Italy",
            categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
            starterMenu: ["Focaccia", "Bruschetta", "Garblic Bread", "Caprese Salad"],
            mainMenu: ["Pizza", "Pasta", "Risotto"],
            openingHours: {
                thu: {
                    open: 12,
                    close: 22,
                },
                fri: {
                    open: 11,
                    close: 23,
                },
                sat: {
                    open: 0,
                    close: 24,
                },
            },
            order: function (starterIndex, mainIndex) {
                return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
            },

            orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", addres }) {
                console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`);
            },

            // orderPizza: function (mainIngredient, ...otherIngredients){
            // console.log(mainIngredient);
            // console.log(otherIngredients);
            // }
        };

        // OBJECTS //
        console.log(`------------------------------Destructuring - Objects------------------------------`);

        // Rename variables
        const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
        console.log("Rename variables - ", restaurantName, hours, tags);

        // Setting default value
        const { menu = [], starterMenu: starters = [] } = restaurant;
        console.log("Setting default value - ", menu, starters);

        // Mutating variables
        let a = 111;
        let b = 999;
        const obj = { a: 23, b: 7, c: 14 };
        ({ a, b } = obj);
        console.log("Mutating variables - ", a, b);

        // Nested objects
        const {
            fri: { open: o, close: c },
        } = hours;
        console.log("Nested objects - ", o, c);

        // Destructuring objects-functions
        restaurant.orderDelivery({
            time: "22:30",
            addres: "Via del Sole, 21",
            mainIndex: 2,
            starterIndex: 2,
        });

        restaurant.orderDelivery({
            addres: "Via del Sole, 21",
            starterIndex: 1,
        });

        // Arrays //
        console.log(`------------------------------Destructuring - Arrays------------------------------`);

        const [z, y, w] = [2, 3, 4];
        console.log(z, y, w);

        // Change order
        let [main, , secondary] = restaurant.categories;
        [main, , secondary] = [secondary, , main];
        console.log(main, secondary);

        // Nested arrays (elimini array-ul principal)
        const nested = [2, 4, [5, 6]];
        const [i, , j] = nested;
        console.log("Nested arrays - ", i, j);

        // Nested in nested arrays (elimini array-ul din array)
        const nestedInNested = [2, 4, [5, 6]];
        const [f, , [g, h]] = nestedInNested;
        console.log("Nested in nested arrays - ", f, g, h);

        // Destructuring arrays-functions (recive 2 return values from a function)
        const [starter, mainCourse] = restaurant.order(2, 0);
        console.log(starter, mainCourse);

        // Rest Pattern and Parameters //
        console.log(`------------------------------Spreed operator & Rest Pattern------------------------------`);

        // Spreed operator - le scoate din array
        const spreedOperator = [1, 2, ...[3, 4]];
        console.log("Spreed operator - ", spreedOperator);

        // Rest pattern - le pune in array
        // ...others fiind rest pattern
        const [r, q, ...others] = [1, 2, 3, 4, 5];
        console.log("Rest pattern - ", r, q, others);

        // Short Circuiting: && and ||
        console.log(`------------------------------Short Circuiting: && and || and ??------------------------------`);

        // Logical operator: ||
        // Daca restaurant.numGuests nu exista, va fi luata urmatoarea valoare (adica 10)
        // Daca restaurant.numGuests este 0, acesta va returna 10, pentru ca 0 este falsy value
        restaurant.numGuests = 23;
        const guests1 = restaurant.numGuests || 10;
        console.log("Logical operator: || - ", guests1);

        // Logical operator: &&
        // Daca restaurant.orderPizza exista (adica are valoarea truthy), acesta va trece la al 2-lea parametru (adica la restaurant.orderPizza("mushrooms", "spinach"))
        const guests2 = restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
        console.log("Logical operator: && - ", guests2);

        // Logical operator: ?? (Nullish Coalescing operator)
        // Fixeaza problema de la operatorul ||
        restaurant.numGuests = 0;
        const guestCorrect = restaurant.numGuests ?? 10;
        console.log("Logical operator: ?? - ", guestCorrect);

        // Logical Assignment Operators
        console.log(`------------------------------Logical Assignment Operators------------------------------`);

        const rest1 = {
            name: "Capri",
            numGuests: 20,
            nullishGuests: 0,
        };

        const rest2 = {
            name: "La Piazza",
            owner: "Giovanni Rossi",
        };

        // OR assignment operator ( || )
        // Asigneaza o valoare unei variabile doar atunci cand acea variabila este falsy.
        rest1.numGuests ||= 10;
        rest2.numGuests ||= 10;

        console.log("OR assignment operator with rest1 - ", rest1);
        // Aici va pune valoarea default 10 la numGuests pentru ca aceasta este falsy in obiect
        console.log("OR assignment operator with rest2 - ", rest2);

        // Nullish assignment operator ( ?? )
        // Asigneaza o valoare unei variabile doar atunci cand acea variabila este nullish.
        rest1.nullishGuests ??= 10;
        rest2.nullishGuests ??= 10;
        console.log("Nullish assignment operator with rest1 - ", rest1);
        // Aici va pune valoarea default 10 la numGuests pentru ca aceasta este nullish (adica null sau undefined) in obiect
        console.log("Nullish assignment operator with rest2 - ", rest2);

        // AND assignment operator ( ?? )
        rest1.owner &&= "<ANONYMOUS>";
        rest2.owner &&= "<ANONYMOUS>";
        console.log("AND assignment operator with rest1 - ", rest1);
        // Asigneaza o valoare unei variabile doar atunci cand acea variabila este truthy.
        console.log("AND assignment operator with rest2 - ", rest2);
    }
}
