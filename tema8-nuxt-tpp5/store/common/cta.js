export const state = () => ({
  ctaContent: {
    title: "Stand Blog HTML5 Template",
    text: "Creative HTML Template For Bloggers!",
    urlLink: "#cta",
    textLink: "download now!",
  },
});

export const getters = {
  getCtaContent(state) {
    return state.ctaContent;
  },
};

export const mutations = {
  setCtaContent(state, menu) {
    state.ctaContent = menu;
  },
};

export const actions = {};
