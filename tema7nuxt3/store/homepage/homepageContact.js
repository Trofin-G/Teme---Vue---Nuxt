export const state = () => ({
  headingSection: {
    sectionTitle: "GET IN TOUCH",
    sectionDescription:
      "1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111",
  },
  
  sectionContent: {
    buttonText: 'send message',
    formNamePlaceholder: 'Your Name*',
    formEmailPlaceholder: 'Your Email*',
    formDescriptionPlaceholder: 'Your Message*',
  }
});

export const getters = {
  getHeadingSection(state) {
    return state.headingSection;
  },

  getSectionContent(state) {
    return state.sectionContent;
  },
};

export const mutations = {
  setHeadingSection(state, menu) {
    state.headingSection = menu;
  },

  setSectionContent(state, menu) {
    state.sectionContent = menu;
  },
};

export const actions = {};
