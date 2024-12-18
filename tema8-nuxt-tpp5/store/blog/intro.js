export const state = () => ({
  blogIntro: {
    title: "RECENT POSTS",
    text: "OUR RECENT BLOG ENTRIES",
  },
});

export const getters = {
  getBlogIntro(state) {
    return state.blogIntro;
  },
};

export const mutations = {
  setBlogIntro(state, menu) {
    state.blogIntro = menu;
  },
};

export const actions = {};
