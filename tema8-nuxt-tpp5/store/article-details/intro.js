export const state = () => ({
    articleDetailsIntro: {
      title: "POST DETAILS",
      text: "SINGLE BLOG POST",
    },
  });
  
  export const getters = {
    getArticleDetailsIntro(state) {
      return state.articleDetailsIntro;
    },
  };
  
  export const mutations = {
    setArticleDetailsIntro(state, menu) {
      state.articleDetailsIntro = menu;
    },
  };
  
  export const actions = {};
  