/* 
**Cerinta:**
-----------------
Implementeaza o lista de task-uri folosind: ajax, template-izare, events si cookies.

Folosind URL-ul https://jsonplaceholder.typicode.com/todos, sa se “deseneze” primele 5 elemente din ToDo List:
Toate elementele din lista se vor afla in cadrul unui panel/card cu titlul “To do list”
Fiecare element din lista va fi sub forma de checkbox
Checkbox-ul nu trebuie sa fie default, ci unul custom/stilizat
Implementarea unui al doilea panel/card
Toate elementele bifate din lista se vor afla in cadrul unui panel/card cu titlul “Done”
Un buton “Save”
La click pe unul din elementele din “To do list”, acel element va trebui mutat in lista “Done” ca si “bifat”
La click pe unul din elementele din “Done”, acel element va trebui mutat in lista “To do list” ca si “nebifat”
La click pe “Save” se vor salva toate elementele din lista “Done” intr-un cookie si se va da refresh la pagina
La incarcarea paginii, se vor prelua din cookie toate elementele “bifate” si se vor popula cele doua liste corespunzator

**Tips:**
-----------------
Folosind Bootstrap, implementeaza un layout user-friendly (nu lasa elemente browser default)
Folositi libraria https://github.com/carhartl/jquery-cookie pentru cookies
Pentru a salva in cookie elementele bifate/nebifate foloseste un array
*/

class ToDoList_Tema_12 {
    constructor() {
        if ($(".tema-12").length === 0) {
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
        this.toDoUnchecked = document.querySelector(".todo-list-unchecked");
        this.toDoChecked = document.querySelector(".todo-list-checked");
        this.saveBtn = document.querySelector(".btn-success");
        this.cloneArr = [];
        this.dataForFetch = "https://jsonplaceholder.typicode.com/todos";
    }

    handleEvents() {
        let self = this;
        // let cloneArr = [];

        this.fetchData(self.dataForFetch);

        setTimeout(() => {
            if ($.cookie("list") !== null && $.cookie("list") !== undefined) {
                self.cloneArr = JSON.parse($.cookie("list"));
            }

            const checkHandler = (clicked, updateTo) => {
                if (!clicked) return;
                const elementId = clicked.getAttribute("data-id");
                let updateObj = self.cloneArr.findIndex((obj) => obj.id == elementId);
                self.cloneArr[updateObj].completed = updateTo;
                displayingData();
            };

            this.toDoChecked.addEventListener("click", (e, updateTo = false) => {
                const clicked = e.target.closest(".todo-element");
                checkHandler(clicked, updateTo);
            });

            this.toDoUnchecked.addEventListener("click", (e, updateTo = true) => {
                const clicked = e.target.closest(".todo-element");
                checkHandler(clicked, updateTo);
            });

            const updateRow = function () {
                document.querySelectorAll(".todo-list-checked .todo-element img").forEach((item) => item.setAttribute("src", "images/checked.png"));
                document.querySelectorAll(".todo-list-checked .todo-element p").forEach((item) => (item.style.textDecoration = "line-through"));
            };

            const displayingData = () => {
                self.toDoUnchecked.innerHTML = self.toDoChecked.innerHTML = "";

                self.cloneArr.map((item) => {
                    const listTemp = `
                        <div class="todo-element" data-id="${item.id}">
                            <img src="images/unchecked.png" alt="checked">
                            <p>${item.title}</p>
                        </div>
                    `;

                    if (item.completed) {
                        self.toDoChecked.insertAdjacentHTML("afterbegin", listTemp);
                        updateRow();
                    } else {
                        self.toDoUnchecked.insertAdjacentHTML("afterbegin", listTemp);
                    }
                });
            };
            displayingData();

            this.saveBtn.addEventListener("click", () => {
                $.cookie("list", JSON.stringify(self.cloneArr));
                window.location.reload();
            });
        }, 100);
    }

    fetchData(fetchDataItems) {
        fetch(fetchDataItems)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((item) => {
                    if (this.cloneArr.length < 5) {
                        this.cloneArr.push(item);
                    } // slice ++
                });
            });
    }
}
