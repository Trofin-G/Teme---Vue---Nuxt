export const state = () => ({
  productsList: [],

  currentPage: 1,
  loadItems: 4,
  limit: 4,
  totalItems: 0,
});

export const getters = {
  getProductsList(state) {
    return state.productsList;
  },

  getTotalItems(state) {
    return state.totalItems;
  },

  getLoadItems(state) {
    return state.loadItems;
  },

  getLimit(state) {
    return state.limit;
  },
};

export const mutations = {
  setProductsList(state, fetchData) {
    state.productsList = fetchData.products;
    state.totalItems = fetchData.total;
  },

  setCurrentPage(state, pageValue) {
    state.limit = state.limit + pageValue;
  },

  setFilterValue(state, filterValue) {
    state.filterValue = filterValue;
    state.limit = state.loadItems;
  },
};

export const actions = {
  async fetchProducts({ commit, dispatch, state }) {
    let dataUrl = `https://dummyjson.com/products?limit=${state.limit}`;

    if (state.filterValue != null) {
      dataUrl = `https://dummyjson.com/products/category/${state.filterValue}?limit=${state.limit}`;
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
