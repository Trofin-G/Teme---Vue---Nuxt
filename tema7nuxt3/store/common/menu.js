export const state = () => ({
  menuLinks: [
    { id: "1", url: "#home", text: "Home" },
    { id: "2", url: "#about", text: "About" },
    { id: "3", url: "#work", text: "Work" },
    { id: "4", url: "#blog", text: "Blog" },
    { id: "5", url: "#contact", text: "Contact" },
  ],
});

export const getters = {
  getMenuLinks(state) {
    return state.menuLinks;
  },
};

export const mutations = {
  setMenuLinks(state, menu) {
    state.menuLinks = menu;
  },
};

export const actions = {};
