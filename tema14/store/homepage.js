export const state = () => ({
  responseData: [],

  currentPage: 1,
  totalPages: 0,
  limit: 6,
});

export const getters = {
  getData(state) {
    return state.responseData;
  },

  getTotalPages(state) {
    return state.totalPages;
  },

  getLimit(state) {
    return state.limit;
  },

  getCurrentPage(state) {
    return state.currentPage;
  },
};

export const mutations = {
  setData(state, dataPosts) {
    state.responseData = [...dataPosts.posts];

    state.limit = dataPosts.limit;
    state.totalPages = dataPosts.total / state.limit;
  },

  setCurrentPage: (state, pageValue) =>
    (state.currentPage = pageValue == undefined ? 1 : pageValue),
};

export const actions = {
  sendDataArray({ commit, dispatch, state }, dataArray) {
    commit("setData", dataArray);
  },

  sendPageValue({ commit, dispatch, state }, pageValue) {
    commit("setCurrentPage", pageValue);
  },
};
