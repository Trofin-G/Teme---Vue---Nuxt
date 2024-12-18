class CodingChallenge_27_Project_7 {
    constructor() {
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
        this.searchField = document.querySelector(".search__field");
        this.searchBtn = document.querySelector(".search__btn");
        this.containerRecipes = document.querySelector(".results");
        this.paginationPrevBtn = document.querySelector(".pagination__btn--prev");
        this.paginationNextBtn = document.querySelector(".pagination__btn--next");
        this.paginationPageNumberPrev = document.querySelector(".pagination__btn--prev span");
        this.paginationPageNumberNext = document.querySelector(".pagination__btn--next span");
        this.recipeContainer = document.querySelector(".recipe");
        this.loadingSpinner = document.querySelector(".spinner-recipe-list");
        this.loadingSpinnerDetails = document.querySelector(".spinner-recipe-details");

        this.addRecipeBtn = document.querySelector(".nav__btn--add-recipe");
        this.closeAddRecipeBtn = document.querySelector(".btn--close-modal");
        this.addRecipeWindow = document.querySelector(".add-recipe-window");
        this.addRecipeOverlay = document.querySelector(".overlay");

        this.bookmarksContainer = document.querySelector(".bookmarks__list");
        this.submitAddRecipe = document.querySelector(".upload__btn");
    }

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;

        // API key
        const APIKey = "edc12e3a-de4a-42d4-a820-62153eafaced";

        // Fetch data
        let cloneDataRecipes = [];

        // Search
        let searchText = "";

        // Pagination
        let recipePage = 0;
        let page = 1;
        let recipePerPage = 10;

        // Loading before getting data
        const displayLoadingRecipesList = () => {
            self.containerRecipes.innerHTML = "";
            self.loadingSpinner.classList.remove("hidden");
        };
        const hideLoadingRecipesList = () => {
            self.loadingSpinner.classList.add("hidden");
        };
        const displayLoadingRecipeDetails = () => {
            self.loadingSpinnerDetails.classList.remove("hidden");
        };
        const hideLoadingRecipeDetails = () => {
            self.loadingSpinnerDetails.classList.add("hidden");
        };

        // Fetch data - Recipes list
        const fetchRecipesData = async () => {
            displayLoadingRecipesList();

            try {
                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchText}&key=${APIKey}`);
                const data = await response.json();
                if (!response.ok) throw new Error(`${data.message} (${response.status})`);

                hideLoadingRecipesList();
                cloneDataRecipes.push(data.data.recipes);
                displayingData();
            } catch (error) {
                alert(error);
            }
        };

        // Displaying data - Recipes list
        const displayingData = (recipePage = 10) => {
            cloneDataRecipes.map((items) => {
                // Pagination
                let recipesPagination = items.slice(recipePage - recipePerPage, recipePage);
                if (items.length >= recipePage) {
                    self.paginationNextBtn.classList.remove("hidden");
                } else {
                    self.paginationNextBtn.classList.add("hidden");
                }

                if (recipePage <= 10) {
                    self.paginationPrevBtn.classList.add("hidden");
                } else {
                    self.paginationPrevBtn.classList.remove("hidden");
                }

                self.containerRecipes.innerHTML = "";
                recipesPagination.forEach((item) => {
                    const recipeRowTemp = `
                    <li class="preview">
                        <a class="preview__link " href="#${item.id}" data-recipeid="${item.id}">
                        <figure class="preview__fig">
                            <img src="${item.image_url}" alt="Test" />
                        </figure>
                        <div class="preview__data">
                            <h4 class="preview__title">${item.title}</h4>
                            <p class="preview__publisher">${item.publisher}</p>
                            <div class="preview__user-generated">
                            <svg>
                                <use href="images/project-7/icons.svg#icon-user"></use>
                            </svg>
                            </div>
                        </div>
                        </a>
                    </li>
                    `;

                    self.containerRecipes.insertAdjacentHTML("afterbegin", recipeRowTemp);
                });
            });
        };

        // Search
        this.searchBtn.addEventListener("click", (e) => {
            e.preventDefault();

            searchText = self.searchField.value;
            fetchRecipesData();
            self.searchField.value = "";
        });

        // Pagination
        this.paginationNextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            self.containerRecipes.innerHTML = "";

            page++;
            paginationHandler();
        });

        this.paginationPrevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            self.containerRecipes.innerHTML = "";
            page--;
            paginationHandler();
        });

        const paginationHandler = () => {
            self.paginationPageNumberPrev.textContent = `Page ${page - 1}`;
            self.paginationPageNumberNext.textContent = `Page ${page + 1}`;
            recipePage = recipePerPage * page;
            displayingData(recipePage);
        };

        //  Fetch data - Recipe
        this.containerRecipes.addEventListener("click", (e) => {
            const clicked = e.target.closest(".preview .preview__link");
            let recipeId = clicked.getAttribute("data-recipeid");

            if (!clicked) return;

            clicked.classList.add("preview__link--active");
            fetchRecipeDetails(recipeId);
        });

        const fetchRecipeDetails = async (recipeId) => {
            displayLoadingRecipeDetails();

            try {
                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`);
                const data = await response.json();
                if (!response.ok) throw new Error(`${data.message} (${response.status})`);
                let cloneRecipe = data;

                hideLoadingRecipeDetails();
                displayingDataRecipe(cloneRecipe);
                recipeIngredientsHandler(cloneRecipe);
            } catch (error) {
                alert(error);
            }
        };

        // Displaying data - Recipe
        const displayingDataRecipe = (cloneRecipe) => {
            let recipe = cloneRecipe.data.recipe;

            self.recipeContainer.innerHTML = "";
            const recipeTemp = `
                <figure class="recipe__fig">
                    <img src="${recipe.image_url}" alt="Tomato" class="recipe__img" />
                    <h1 class="recipe__title">
                        <span>${recipe.title}</span>
                    </h1>
                </figure>

                <div class="recipe__details">
                    <div class="recipe__info">
                        <svg class="recipe__info-icon">
                            <use href="images/project-7/icons.svg#icon-clock"></use>
                        </svg>
                        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cooking_time}</span>
                        <span class="recipe__info-text">minutes</span>
                    </div>
                    <div class="recipe__info">
                        <svg class="recipe__info-icon">
                            <use href="images/project-7/icons.svg#icon-users"></use>
                        </svg>
                        <span class="recipe__info-data recipe__info-data--people">1</span>
                        <span class="recipe__info-text">servings</span>

                        <div class="recipe__info-buttons">
                            <button class="btn--tiny btn--increase-servings decrementServ">
                                <svg>
                                    <use href="images/project-7/icons.svg#icon-minus-circle"></use>
                                </svg>
                            </button>
                            <button class="btn--tiny btn--increase-servings incrementServ">
                                <svg>
                                    <use href="images/project-7/icons.svg#icon-plus-circle"></use>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="recipe__user-generated">
                        <svg>
                            <use href="images/project-7/icons.svg#icon-user"></use>
                        </svg>
                    </div>
                    <button class="btn--round btn--bookmark" data-id='${recipe.id}'>
                        <svg class="">
                            <use href="images/project-7/icons.svg#icon-bookmark-fill"></use>
                        </svg>
                    </button>
                </div>

                <div class="recipe__ingredients">
                    <h2 class="heading--2">Recipe ingredients</h2>
                    <ul class="recipe__ingredient-list">

                    </ul>
                </div>

                <div class="recipe__directions">
                    <h2 class="heading--2">How to cook it</h2>
                    <p class="recipe__directions-text">
                        This recipe was carefully designed and tested by
                        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out directions at their website.
                    </p>
                    <a class="btn--small recipe__btn" href="${recipe.source_url}" target="_blank">
                        <span>Directions</span>
                        <svg class="search__icon">
                            <use href="images/project-7/icons.svg#icon-arrow-right"></use>
                        </svg>
                    </a>
                </div>
            `;

            self.recipeContainer.insertAdjacentHTML("afterbegin", recipeTemp);
            bookmarkHandler(recipe);
        };

        // Displaying data - Recipe ingredients
        // const displayingDataRecipeIngredients = (cloneRecipe) => {
        //     let recipe = cloneRecipe.data.recipe;

        //     console.log(recipe);
        //     document.querySelector(".recipe__ingredient-list").innerHTML = "";
        //     recipe.ingredients.forEach((recipeIngredients) => {
        //         const recipeIngredientsTemp = `
        //             <li class="recipe__ingredient">
        //                 <svg class="recipe__icon">
        //                     <use href="images/project-7/icons.svg#icon-check"></use>
        //                 </svg>
        //                 <div class="recipe__quantity">
        //                 ${recipeIngredients.quantity}
        //                 </div>
        //                 <div class="recipe__description">
        //                     <span class="recipe__unit">${recipeIngredients.unit}</span>
        //                     ${recipeIngredients.description}
        //                 </div>
        //             </li>
        //         `;

        //         setTimeout(() => {
        //             document.querySelector(".recipe__ingredient-list").insertAdjacentHTML("afterbegin", recipeIngredientsTemp);
        //         }, 100);
        //     });
        // };

        let results;
        let finalResults;
        let fraction = 0;
        let realNumber = 1;
        const recipeIngredientsHandler = (cloneRecipe) => {
            let recipe = cloneRecipe.data.recipe.ingredients;
            const numberOfServings = document.querySelector(".recipe__info-data--people");
            const incrementServings = document.querySelector(".incrementServ");
            const decrementServings = document.querySelector(".decrementServ");
            displayingDataRecipeIngredients(recipe);
            incrementServings.addEventListener("click", () => {
                document.querySelector(".recipe__ingredient-list").innerHTML = "";
                realNumber++;
                numberOfServings.textContent = realNumber;
                displayingDataRecipeIngredients(recipe);
            });

            decrementServings.addEventListener("click", () => {
                realNumber--;
                numberOfServings.textContent = realNumber;
                displayingDataRecipeIngredients(recipe);
            });
        };

        const displayingDataRecipeIngredients = (recipe) => {
            recipe.forEach((recipeIngredients) => {
                document.querySelector(".recipe__ingredient-list").innerHTML = "";
                let numberInteger = 0;
                let gcd = function (a, b) {
                    if (b < 0.0000001) return a;
                    return gcd(b, Math.floor(a % b));
                };

                fraction = (recipeIngredients.quantity / 4) * realNumber;
                let len = fraction.toString().length - 2;
                let denominator = Math.pow(10, len);
                let numerator = fraction * denominator;
                let divisor = gcd(numerator, denominator);
                numerator /= divisor;
                denominator /= divisor;

                results = Math.floor(numerator) + "/" + Math.floor(denominator);

                if (eval(results) >= 1) {
                    numberInteger = Math.trunc(eval(results));
                    let newFractionNumber = eval(results) - numberInteger;

                    fraction = newFractionNumber;
                    len = fraction.toString().length - 2;
                    denominator = Math.pow(10, len);
                    numerator = fraction * denominator;
                    divisor = gcd(numerator, denominator);
                    numerator /= divisor;
                    denominator /= divisor;

                    if (denominator === 1) {
                        finalResults = "";
                    } else {
                        finalResults = Math.floor(numerator) + "/" + Math.floor(denominator);
                    }

                    results = numberInteger + " " + finalResults;
                }

                const recipeQuantityTempdec = `
                    <li class="recipe__ingredient">
                        <svg class="recipe__icon">
                            <use href="images/project-7/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__quantity">
                            ${results}
                        </div>
                        <div class="recipe__description">
                            <span class="recipe__unit">${recipeIngredients.unit}</span>
                            ${recipeIngredients.description}
                        </div>
                    </li>
                    `;

                setTimeout(() => {
                    document.querySelector(".recipe__ingredient-list").insertAdjacentHTML("afterbegin", recipeQuantityTempdec);
                }, 100);
            });
        };

        // Bookmark - Localstorage
        const data = JSON.parse(localStorage.getItem("recipes"));
        const data2 = JSON.parse(localStorage.getItem("recipesAll"));
        let recipeIdList = data === null ? [] : data;
        let recipeList = data2 === null ? [] : data2;

        const bookmarkHandler = (recipe) => {
            const bookmarkBtn = document.querySelector(".btn--bookmark");
            const recipeID = bookmarkBtn.getAttribute("data-id");
            let savedRecipes = {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image_url: recipe.image_url,
            };

            bookmarkBtn.addEventListener("click", () => {
                let recipeIndex = recipeIdList.indexOf(recipeID);

                if (recipeIdList.includes(recipeID)) {
                    recipeIdList.splice(recipeIndex, 1);
                    recipeList.splice(recipeIndex, 1);
                } else {
                    recipeIdList.push(recipeID);
                    recipeList.push(savedRecipes);
                }

                localStorage.setItem("recipes", JSON.stringify(recipeIdList));
                localStorage.setItem("recipesAll", JSON.stringify(recipeList));
                fetchDataFromBookmarks();
            });
        };

        // Displaying data in Bookmarks
        const fetchDataFromBookmarks = () => {
            self.bookmarksContainer.innerHTML = "";

            recipeList.forEach((item) => {
                const recipeRowTemp = `
                <li class="preview">
                    <a class="preview__link " href="#${item.id}" data-recipeid="${item.id}">
                    <figure class="preview__fig">
                        <img src="${item.image_url}" alt="Test" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${item.title}</h4>
                        <p class="preview__publisher">${item.publisher}</p>
                        <div class="preview__user-generated">
                        <svg>
                            <use href="images/project-7/icons.svg#icon-user"></use>
                        </svg>
                        </div>
                    </div>
                    </a>
                </li>
                `;

                self.bookmarksContainer.insertAdjacentHTML("afterbegin", recipeRowTemp);
            });
        };
        fetchDataFromBookmarks();

        this.bookmarksContainer.addEventListener("click", (e) => {
            const clicked = e.target.closest(".preview .preview__link");
            let recipeId = clicked.getAttribute("data-recipeid");

            if (!clicked) return;

            clicked.classList.add("preview__link--active");
            fetchRecipeDetails(recipeId);
        });

        // Modal - Add Recipe
        this.addRecipeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            self.addRecipeWindow.classList.remove("hidden");
            self.addRecipeOverlay.classList.remove("hidden");
        });

        const closeAddRecipe = () => {
            self.addRecipeWindow.classList.add("hidden");
            self.addRecipeOverlay.classList.add("hidden");
        };

        this.closeAddRecipeBtn.addEventListener("click", closeAddRecipe);
        this.addRecipeOverlay.addEventListener("click", closeAddRecipe);
        document.addEventListener("keyup", (e) => {
            if (e.key === "Escape" && !self.addRecipeWindow.classList.contains("hidden")) {
                closeAddRecipe();
            }
        });

        // Add recipe form
        this.submitAddRecipe.addEventListener("click", function (e) {
            e.preventDefault();

            const dataArr = [...new FormData(document.querySelector(".upload"))];
            const data = Object.fromEntries(dataArr);
            const ingredients = Object.entries(data)
                .filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "")
                .map((ing) => {
                    const ingArr = ing[1].split(",");
                    if (ingArr.length !== 3) throw new Error("Format gresit");
                    const [quantity, unit, description] = ingArr;
                    return { quantity: quantity ? +quantity : null, unit, description };
                });

            const recipe = {
                title: data.title,
                source_url: data.sourceUrl,
                image_url: data.image,
                publisher: data.publisher,
                cooking_time: +data.cookingTime,
                servings: +data.servings,
                ingredients,
            };
            console.log(recipe, "das");
        });
    }
}
