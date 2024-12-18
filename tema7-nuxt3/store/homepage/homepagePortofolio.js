export const state = () => ({
  headingSection: {
    sectionTitle: "OUR PORTFOLIO",
    sectionDescription:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam",
  },

  portofolioProjectsList: [
    {
      url: "#project-1",
      type: "web",
      srcImage: require("assets/images/portofolio-1.png"),
      srcAlt: "portofolio project",
      projectTitle: "ISOMETRIC PERSPECTIVE MOCK-UP",
    },
    {
      url: "#project-2",
      type: "web",
      srcImage: require("assets/images/portofolio-2.png"),
      srcAlt: "portofolio project",
      projectTitle: "TIME ZONE APP UI",
    },
    {
      url: "#project-3",
      type: "apps",
      srcImage: require("assets/images/portofolio-3.png"),
      srcAlt: "portofolio project",
      projectTitle: "VIRO MEDIA PLAYERS UI",
    },
    {
      url: "#project-4",
      type: "icons",
      srcImage: require("assets/images/portofolio-4.png"),
      srcAlt: "portofolio project",
      projectTitle: "BLOG / MAGAZINE FLAT UI KIT",
    },
    {
      url: "#project-5",
      type: "web",
      srcImage: require("assets/images/portofolio-1.png"),
      srcAlt: "portofolio project",
      projectTitle: "ISOMETRIC PERSPECTIVE MOCK-UP",
    },
    {
      url: "#project-6",
      type: "web",
      srcImage: require("assets/images/portofolio-2.png"),
      srcAlt: "portofolio project",
      projectTitle: "TIME ZONE APP UI",
    },
    {
      url: "#project-7",
      type: "apps",
      srcImage: require("assets/images/portofolio-3.png"),
      srcAlt: "portofolio project",
      projectTitle: "VIRO MEDIA PLAYERS UI",
    },
    {
      url: "#project-8",
      type: "icons",
      srcImage: require("assets/images/portofolio-4.png"),
      srcAlt: "portofolio project",
      projectTitle: "BLOG / MAGAZINE FLAT UI KIT",
    },
    {
      url: "#project-8",
      type: "web",
      srcImage: require("assets/images/portofolio-4.png"),
      srcAlt: "portofolio project",
      projectTitle: "BLOG / MAGAZINE FLAT UI KIT",
    },
  ],

  filterTabs: [
    {
      type: "web",
      typeText: "web",
    },
    {
      type: "apps",
      typeText: "apps",
    },
    {
      type: "icons",
      typeText: "icons",
    },
  ],

  results: [],
});

export const getters = {
  getHeadingSection(state) {
    return state.headingSection;
  },

  getFilterTabs(state) {
    return state.filterTabs;
  },

  getResults(state) {
    return state.results.length == 0 ? state.portofolioProjectsList : state.results;
  },
};

export const mutations = {
  setHeadingSection(state, menu) {
    state.headingSection = menu;
  },

  setFilterTabs(state, menu) {
    state.filterTabs = menu;
  },

  setResults(state, componentValue) {
    if (componentValue === "all" || !componentValue) {
      state.results = state.portofolioProjectsList;
    } else {
      state.results = state.portofolioProjectsList.filter((item) => item.type === componentValue);
    }
  },
};

export const actions = {
  filterHandler({ commit, dispatch, state }, componentValue) {
    commit("setResults", componentValue)
  },
};
