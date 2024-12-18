class CodingChallenge_20_Project_5 {
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
        this.allSections = document.querySelectorAll(".section");
        this.imgTargets = document.querySelectorAll("img[data-src]");
        this.nav = document.querySelector(".nav");

        this.btnScrollTo = document.querySelector(".btn--scroll-to");
        this.section1 = document.querySelector("#section--1");
        this.navLinks = document.querySelector(".nav__links");

        this.tabsContainer = document.querySelector(".operations__tab-container");
        this.tabs = document.querySelectorAll(".operations__tab");
        this.tabsContent = document.querySelectorAll(".operations__content");

        this.modal = document.querySelector(".modal");
        this.overlay = document.querySelector(".overlay");
        this.btnCloseModal = document.querySelector(".btn--close-modal");
        this.btnsOpenModal = document.querySelectorAll(".btn--show-modal");
    }

    /**
     * Listen for events
     */
    handleEvents() {
        let self = this;

        // Open Modal
        const openModal = (e) => {
            e.preventDefault();
            self.modal.classList.remove("hidden");
            self.overlay.classList.remove("hidden");
        };

        this.btnsOpenModal.forEach((btn) => {
            btn.addEventListener("click", openModal);
        });

        // Close Modal
        const closeModal = (e) => {
            e.preventDefault();
            self.modal.classList.add("hidden");
            self.overlay.classList.add("hidden");
        };

        this.btnCloseModal.addEventListener("click", closeModal);
        this.overlay.addEventListener("click", closeModal);

        document.addEventListener("keyup", (e) => {
            if (e.key === "Escape" && !self.modal.classList.contains("hidden")) {
                closeModal();
            }
        });

        // Scroll to section
        this.btnScrollTo.addEventListener("click", () => {
            self.section1.scrollIntoView({ behavior: "smooth" });
        });

        this.navLinks.addEventListener("click", (e) => {
            e.preventDefault();

            if (e.target.classList.contains("nav__link")) {
                if (e.target.getAttribute("href") === "") return null;
                document.querySelector(e.target.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
            }
        });

        // Tabs
        this.tabsContainer.addEventListener("click", (e) => {
            const clicked = e.target.closest(".operations__tab");

            // Ignora alte click-uri
            if (!clicked) return;

            // Reset
            self.tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
            self.tabsContent.forEach((content) => content.classList.remove("operations__content--active"));

            // Adaugam clasa activa
            clicked.classList.add("operations__tab--active");
            document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
        });

        // Sticky nav
        window.addEventListener("scroll", function () {
            if (this.window.scrollY > 100) {
                self.nav.classList.add("sticky");
            } else {
                self.nav.classList.remove("sticky");
            }
        });

        // Animatia de pe meniu
        const menuAnimated = (e, opacity) => {
            if (e.target.classList.contains("nav__link")) {
                const link = e.target;
                const sibls = link.closest(".nav").querySelectorAll(".nav__link");
                sibls.forEach(function (element) {
                    if (element !== link) element.style.opacity = opacity;
                });
            }
        };

        this.nav.addEventListener("mouseover", (e) => menuAnimated(e, 0.5));
        this.nav.addEventListener("mouseout", (e) => menuAnimated(e, 1));

        // Animatie la scroll
        const revealSection = function (entries, observer) {
            const [entry] = entries;

            if (!entry.isIntersecting) return;

            entry.target.classList.remove("section--hidden");

            observer.unobserve(entry.target);
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.15,
        });

        this.allSections.forEach(function (section) {
            sectionObserver.observe(section);
            section.classList.add("section--hidden");
        });

        // Animatie - Lazy loading images
        const loadImg = function (entries, observer) {
            const [entry] = entries;

            if (!entry.isIntersecting) return;

            entry.target.src = entry.target.dataset.src;

            entry.target.addEventListener("load", function () {
                entry.target.classList.remove("lazy-img");
            });
            observer.unobserve(entry.target);
        };

        const imgObserver = new IntersectionObserver(loadImg, {
            root: null,
            threshold: 0,
            rootMargin: "-200px",
        });

        this.imgTargets.forEach((img) => imgObserver.observe(img));

        // Slider - Slick
        $(".slider").slick({
            // centerMode: true,
            slidesToShow: 1,
            speed: 800,
            infinite: true,
            arrows: true,
            prevArrow: `<a class="slick-arrow slick-prev">&larr;</a>`,
            nextArrow: `<a class="slick-arrow slick-next">&rarr;</a>`,
        });
    }
}
