export const state = () => ({
    documentsList: [
        {
            id: 0,
            name: "Politica de prelucrare a datelor cu caracter personal.html",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            size: "",
            type: "html",
            link: "politica-de-prelucrare-a-datelor-cu-caracter-personal",
            category: {
                categoryTitle: "Prelucrarea datelor cu caracter personal",
                subcategoryTitle: "Politici",
            },
        },
        {
            id: 1,
            name: "Documente contractuale dsss.pdf",
            description: "",
            size: "54.63 kb",
            type: "pdf",
            link: "https://www.edenred.ro/sites/default/files/2022-02/RO_Codul_Etic_2021.pdf",
            category: {
                categoryTitle: "Regulamente campaniide marketing",
                subcategoryTitle:
                    "Programe de recomandari clienti si comercianti",
            },
        },
        {
            id: 2,
            name: "Legislație carte.pdf",
            description: "",
            size: "54.63 kb",
            type: "pdf",
            link: "https://www.edenred.ro/sites/default/files/2022-02/RO_Codul_Etic_2021.pdf",
            category: {
                categoryTitle: "Legislație",
                subcategoryTitle: "Tichete de masa",
            },
        },
        {
            id: 3,
            name: "Document.pdf",
            description: "",
            size: "54.63 kb",
            type: "pdf",
            link: "https://www.edenred.ro/sites/default/files/2022-02/RO_Codul_Etic_2021.pdf",
            category: {
                categoryTitle: "Politici și proceduri",
                subcategoryTitle: "Politici",
            },
        },
        {
            id: 4,
            name: "Some.pdf",
            description: "",
            size: "54.63 kb",
            type: "pdf",
            link: "https://www.edenred.ro/sites/default/files/2022-02/RO_Codul_Etic_2021.pdf",
            category: {
                categoryTitle: "Politici și proceduri",
                subcategoryTitle: "Proceduri",
            },
        },
        {
            id: 5,
            name: "Comercianti page html",
            description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.`,
            size: "",
            type: "html",
            link: "pagina-html-de-test",
            category: {
                categoryTitle: "Documente contractuale",
                subcategoryTitle: "Comercianti",
            },
        },
    ],

    categoryList: [],
    sidebarList: [],

    resultsList: [],
    categoryData: {
        category: "",
        subcategory: "",
    },
});

export const getters = {
    getDocumentsList(state) {
        return state.documentsList;
    },

    getSerachList(state) {
        return state.resultsList;
    },

    getItemDetails(state) {
        return state.resultsList;
    },

    getCategoryPage(state) {
        return state.categoryData;
    },

    getSidebarList(state) {
        return state.sidebarList;
    },
};

export const mutations = {
    setDocumentsList: (state, item) => (state.documentsList = item),

    setSidebarList(state) {
        state.documentsList.map((product) => {
            state.categoryList.push(product.category);
        });

        state.categoryList = state.categoryList.filter(
            (obj, index) =>
                state.categoryList.findIndex(
                    (item) => item.categoryTitle === obj.categoryTitle
                ) === index
        );

        let numbIndexCategory = 0;
        let numbIndexSubcategory = 0;
        state.sidebarList = [];
        state.categoryList.map((item) => {
            state.sidebarList.push({
                id: (numbIndexCategory += 1),
                name: `${item.categoryTitle}`,
                childList: [
                    {
                        id: (numbIndexSubcategory += 1),
                        name: `${item.subcategoryTitle}`,
                    },
                ],
            });
        });

        console.log(state.categoryList, "state.categoryList");
    },

    setSearchList(state, searchValue) {
        if (searchValue) {
            state.resultsList = state.documentsList.filter(
                (doc) => doc.name.toLowerCase().indexOf(searchValue) !== -1
            );
        } else {
            state.resultsList = state.documentsList;
        }
    },

    setItemDetails(state, valueSlug) {
        state.resultsList = [];

        state.resultsList = state.documentsList.filter((doc) => {
            return String(doc.link) === String(valueSlug);
        });
    },

    setCategoryPage(state, valueCategory) {
        state.resultsList = [];

        state.categoryData = {
            category: valueCategory.category,
            subcategory: valueCategory.subcategory,
        };

        state.resultsList = state.documentsList.filter((doc) => {
            return (
                String(
                    `${doc.category.categoryTitle}${doc.category.subcategoryTitle}`
                ) ===
                String(`${valueCategory.category}${valueCategory.subcategory}`)
            );
        });
    },
};

export const actions = {
    searchValue({ commit, dispatch, state }, searchValue) {
        this.$router.push(`/search/${searchValue}`);
        commit("setSearchList", searchValue);
    },

    detailsPage({ commit, dispatch, state }, valueSlug) {
        commit("setItemDetails", `${valueSlug}`);
        this.$router.push(`/details/${valueSlug}`);
    },

    categoryPage({ commit, dispatch, state }, valueCategory) {
        commit("setCategoryPage", valueCategory);

        let slugCategory = valueCategory.category
            .toLowerCase()
            .replaceAll(" ", "-");
        let slugSubcategory = valueCategory.subcategory
            .toLowerCase()
            .replaceAll(" ", "-");

        this.$router.push(`/legal/#${slugCategory}/${slugSubcategory}`);
    },
};
