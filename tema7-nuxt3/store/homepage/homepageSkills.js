export const state = () => ({
  headingSection: {
    sectionTitle: "WE GOT SKILLS!",
    sectionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  skillsListItems: [
    {
      srcImage: require("assets/images/skills-1.png"),
      srcAlt: 'skill',
      skillTitle: "WEB DESIGN",
    },
    {
      srcImage: require("assets/images/skills-2.png"),
      srcAlt: 'skill',
      skillTitle: "HTML / CSS",
    },
    {
      srcImage: require("assets/images/skills-3.png"),
      srcAlt: 'skill',
      skillTitle: "GRAPHIC DESIGN",
    },
    {
      srcImage: require("assets/images/skills-4.png"),
      srcAlt: 'skill',
      skillTitle: "UI / UX",
    },
  ],
});

export const getters = {
  getHeadingSection(state) {
    return state.headingSection;
  },

  getSkillsListItems(state) {
    return state.skillsListItems;
  },
};

export const mutations = {
  setHeadingSection(state, menu) {
    state.headingSection = menu;
  },

  setSkillsListItems(state, menu) {
    state.skillsListItems = menu;
  },
};

export const actions = {};
