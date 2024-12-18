export const state = () => ({
  infoSidebar: {
    phone: "090-484-8080",
    email: "info@company.com",
    address: "123 Aenean id posuere dui, Praesent laoreet 10660",
  },
});

export const getters = {
  getInfoSidebar(state) {
    return state.infoSidebar;
  },
};

export const mutations = {
  setInfoSidebar(state, menu) {
    state.infoSidebar = menu;
  },
};

export const actions = {};
