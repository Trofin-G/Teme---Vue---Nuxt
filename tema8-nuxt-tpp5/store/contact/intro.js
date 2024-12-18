export const state = () => ({
    contactIntro: {
        title: "CONTACT US",
        text: "LET’S STAY IN TOUCH!",
      },
});

export const getters = {
    getContactIntro(state) {
        return state.contactIntro;
      },
};

export const mutations = {
    setContactIntro(state, menu) {
        state.contactIntro = menu;
      },
};

export const actions = {
  
};