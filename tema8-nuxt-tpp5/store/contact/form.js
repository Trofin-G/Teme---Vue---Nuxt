export const state = () => ({
  dataForm: {
    formText: 'Send us a message',
    formNamePlaceholder: 'YOUR NAME',
    formEmailPlaceholder: 'YOUR EMAIL',
    formSubjectPlaceholder: 'SUBJECT',
    formDescriptionPlaceholder: 'YOUR MESSAGE',
  }
});

export const getters = {
    getDataForm(state) {
        return state.dataForm;
      },
};

export const mutations = {
    setDataForm(state, menu) {
        state.dataForm = menu;
      },
};

export const actions = {
  
};