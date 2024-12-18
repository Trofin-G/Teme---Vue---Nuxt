export const state = () => ({
  aboutIntro: {
    title: "ABOUT US",
    text: "MORE ABOUT US!",
  },
});

export const getters = {
  getAboutIntro(state) {
    return state.aboutIntro;
  },
};

export const mutations = {
  setAboutIntro(state, menu) {
    state.aboutIntro = menu;
  },
};

export const actions = {};
