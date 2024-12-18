export const state = () => ({
  footerContent: {
    content:
      "Dacă întâmpini probleme în utilizarea platformei, te rugăm să ne contactezi la",
    emailAddress: "contact@paypoint.ro",
  },
});

export const getters = {
  getFooterContent(state) {
    return state.footerContent;
  },
};

export const mutations = {
  setFooterContent(state, menu) {
    state.footerContent = menu;
  },
};

export const actions = {};
