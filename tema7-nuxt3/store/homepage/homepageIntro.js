export const state = () => ({
    sectionContent: {
      sectionText: "Hi there! We are the new kids on the block and we build awesome websites and mobile apps.",
      buttonUrl: "#contact",
      buttonText: 'WORK WITH US!',
    },
  });
  
  export const getters = {
    getSectionContent(state) {
      return state.sectionContent;
    },
  };
  
  export const mutations = {
    setSectionContent(state, menu) {
      state.sectionContent = menu;
    },
  };
  
  export const actions = {};
  