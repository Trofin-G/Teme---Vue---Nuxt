export const state = () => ({
  iframeMap: {
    map: ` <iframe
    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
    width="100%" height="450px" frameborder="0" style="border:0" allowfullscreen></iframe>`,
  },
});

export const getters = {
  getIframeMap(state) {
    return state.iframeMap;
  },
};

export const mutations = {
  setIframeMap(state, menu) {
    state.iframeMap = menu;
  },
};

export const actions = {};
