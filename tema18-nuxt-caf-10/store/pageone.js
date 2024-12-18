export const state = () => ({
  productsList: [],

  currentPage: 1,
  totalPages: 0,
  limit: 4,
});

export const getters = {
  getProductsList(state) {
    return state.productsList;
  },

  getTotalPages(state) {
    return state.totalPages;
  },

  getCurrentPage(state) {
    return state.currentPage;
  },
};

export const mutations = {
  setProductsList(state, fetchData) {
    state.productsList = fetchData.products;
    state.totalPages = Math.ceil(fetchData.total / state.limit);
  },

  setCurrentPage(state, pageValue) {
    state.currentPage = pageValue == undefined ? 1 : pageValue;
  },

  setFilterValue(state, filterValue) {
    state.filterValue = filterValue;
    state.currentPage = 1;
  },
};

export const actions = {
  async fetchProducts({ commit, dispatch, state }) {
    let skippedProducts = state.limit * (state.currentPage - 1);
    let dataUrl = `https://dummyjson.com/products?limit=${state.limit}&skip=${skippedProducts}`;

    if (state.filterValue != null) {
      dataUrl = `https://dummyjson.com/products/category/${state.filterValue}?limit=${state.limit}&skip=${skippedProducts}`;
    }

    const response = await fetch(dataUrl);
    const fetchData = await response.json();
    commit("setProductsList", fetchData);
  },

  currentPageHandler({ commit, dispatch, state }, pageValue) {
    commit("setCurrentPage", pageValue);
  },

  filterHandler({ commit, dispatch, state }, filterValue) {
    commit("setFilterValue", filterValue);
  },
};
