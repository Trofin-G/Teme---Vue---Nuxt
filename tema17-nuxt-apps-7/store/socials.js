export const state = () => ({
  socialsList: [
    {
      id: 1,
      url: "https://www.facebook.com/edenred.romania/",
      icon: require("assets/images/logos/facebook.svg"),
    },
    {
      id: 2,
      url: "https://www.youtube.com/channel/UCV14YEIG0Y2hl0xq_a7GoJQ",
      icon: require("assets/images/logos/youtube.svg"),
    },
    {
      id: 2,
      url: "https://ro.linkedin.com/company/edenred-romania",
      icon: require("assets/images/logos/linkedin.svg"),
    },
  ],
});

export const getters = {
    getSocialsList(state) {
      return state.socialsList;
    },
  };
  
  export const mutations = {
    setSocialsList: (state, social) => (state.socialsList = social),
  };

export const actions = {};
