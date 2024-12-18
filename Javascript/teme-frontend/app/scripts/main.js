// init handlers
let layoutHandler = null;
let homepageHandler = null;
let toDoList_Tema_12 = null;
let hangman_Tema_18 = null;
let xO_Tema_24 = null;

const initHandlers = () => {
    layoutHandler = new LayoutHandler();
    homepageHandler = new HomepageHandler();
    toDoList_Tema_12 = new ToDoList_Tema_12();
    hangman_Tema_18 = new Hangman_Tema_18();
    xO_Tema_24 = new XO_Tema_24();
};

// uncomment this to use jQuery
(($) => {
    $(document).ready(() => {
        initHandlers();
    });
})(jQuery);

// init handlers using vanilla
// document.addEventListener('DOMContentLoaded', () => { initHandlers(); });
