export const state = () => ({
  footerLinks: [
    { id: 1, urlLink: "#facebook", textLink: "FACEBOOK" },
    { id: 2, urlLink: "#twitter", textLink: "twitter" },
    { id: 3, urlLink: "#behance", textLink: "behance" },
    { id: 4, urlLink: "#linkedin", textLink: "linkedin" },
    { id: 5, urlLink: "#dribbble", textLink: "dribbble" },
  ],

  footerCopyright: {
    copyrightText: "COPYRIGHT 2020 STAND BLOG CO. | DESIGN: ",
    urlLink: "https://templatemo.com/",
    textLink: "TEMPLATEMO",
  },
});

export const getters = {
  getFooterLinks(state) {
    return state.footerLinks;
  },

  getFooterCopyright(state) {
    return state.footerCopyright;
  },
};

export const mutations = {
  setFooterMenu(state, menu) {
    state.footerLinks = menu;
  },

  setFooterCopyright(state, menu) {
    state.footerCopyright = menu;
  },
};

export const actions = {};
