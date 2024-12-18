export const state = () => ({
  headerLinks: [
    {
      id: "1",
      urlLink: "/contracte",
      classLink: 'item__link',
      textLink: "Contracte",
      srcIcon: require("assets/images/icons/file-grey.svg"),
      altIcon: "icon",
      classItem: 'item',
      par: '',
    },
    {
      id: "2",
      urlLink: "/",
      classLink: 'item__link item__link--badge',
      textLink: "Mesaje",
      srcIcon: require("assets/images/icons/mail-grey.svg"),
      altIcon: "icon",
      classItem: 'item',
      par: 'message'
    },
    {
      id: "3",
      urlLink: "/create-message",
      classLink: 'item__link item__link--button',
      textLink: "CREAZA CONTRACT NOU",
      srcIcon: require("assets/images/icons/add-grey.svg"),
      altIcon: "icon",
      classItem: 'item',
      par: 'add',
    },
    {
      id: "4",
      classLink: 'item__link',
      urlLink: "/deconectare",
      textLink: "Deconectare",
      srcIcon: require("assets/images/icons/logout-grey.svg"),
      altIcon: "icon",
      classItem: 'item item--border-0 item--no-icon',
      par: 'dec',
    },
  ],

  headerLogo: {
    srcLogo: require("assets/images/logo.svg"),
    altLogo: "logo",
    urlLogo: "/",
  },
});

export const getters = {
  getHeaderLinks(state) {
    return state.headerLinks;
  },

  getHeaderLogo(state) {
    return state.headerLogo;
  },
};

export const mutations = {
  setHeaderLinks(state, menu) {
    state.headerLinks = menu;
  },

  setHeaderLogo(state, menu) {
    state.headerLogo = menu;
  },
};

export const actions = {};
