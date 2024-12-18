export const state = () => ({
  categoriesList: [],
});

export const getters = {
  getCategoriesList(state) {
    return state.categoriesList;
  },
};

export const mutations = {
  setCategoriesList: (state, categoriesData) => (state.categoriesList = categoriesData),
};

export const actions = {
  async fetchCategories({ commit, dispatch, state }) {
    const response = await fetch(`https://dummyjson.com/products/categories`);
    const categoriesData = await response.json();
    commit("setCategoriesList", categoriesData);
  },
};
