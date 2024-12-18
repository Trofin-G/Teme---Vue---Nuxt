export const state = () => ({
  footerLinks: [
    { url: "#Facebook", text: "Facebook" },
    { url: "#Twitter", text: "Twitter" },
    { url: "#Google+", text: "Google+" },
    { url: "#LinkedIn", text: "LinkedIn" },
    { url: "#Behance", text: "Behance" },
    { url: "#Dribbble", text: "Dribbble" },
    { url: "#GitHub", text: "GitHub" },
  ],
});

export const getters = {
  getFooterLinks(state) {
    return state.footerLinks;
  },
};

export const mutations = {
  setFooterMenu(state, menu) {
    state.footerLinks = menu;
  },
};

export const actions = {};
