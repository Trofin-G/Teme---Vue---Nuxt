export const state = () => ({
  headerLinks: [
    { id: "1", urlLink: "/", textLink: "HOME" },
    { id: "2", urlLink: "/about", textLink: "about us" },
    { id: "3", urlLink: "/blog", textLink: "blog entries" },
    { id: "4", urlLink: "/contact", textLink: "contact us" },
  ],

  headerLogo: {
    textLogo: "Stand Blog",
    urlLogo: "/",
  },
});

export const getters = {
  getHeaderLinks(state) {
    return state.headerLinks;
  },

  getHeaderLogo(state) {
    return state.headerLogo;
  },
};

export const mutations = {
  setHeaderLinks(state, menu) {
    state.headerLinks = menu;
  },

  setHeaderLogo(state, menu) {
    state.headerLogo = menu;
  },
};

export const actions = {};
