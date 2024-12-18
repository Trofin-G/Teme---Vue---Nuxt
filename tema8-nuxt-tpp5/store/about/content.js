export const state = () => ({
  aboutContent: {
    srcImage: require("assets/images/about-us.jpg"),
    altImage: "about-img",
    description: `<p>Please tell your friends about TemplateMo website. Thank you. You can browse through different
    categories of templates such as <a rel="nofollow" href="https://templatemo.com/tag/business"
        target="_parent">business</a>, <a rel="nofollow" href="https://templatemo.com/tag/portfolio"
        target="_parent">portfolio</a>, <a rel="nofollow" href="https://templatemo.com/tag/restaurant"
        target="_parent">restaurant</a>, etc. Pellentesque quis luctus libero. Maecenas pretium molestie
    erat, ac tincidunt leo gravida ac. Cras ullamcorper eu ipsum eu sollicitudin. Fusce vitae commodo
    turpis. Integer ullamcorper purus nec justo mollis fermentum. Nunc imperdiet erat nec lacinia
    laoreet. <br><br>Maecenas faucibus ullamcorper felis vitae finibus. Nullam at quam ut lacus aliquam
    tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate,
    cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra
    leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula
    eros orci vel neque.</p>`,
  },

  twoColumnRow: [
    {
      id: 1,
      title: "Two-One Donec porttitor augue",
      description:
        "Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.",
    },
    {
      id: 2,
      title: "Two-Two Donec porttitor augue",
      description:
        "Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.",
    },
  ],

  threeColumnRow: [
    {
      id: 1,
      title: "1-03 Donec porttitor augue",
      description:
        "Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.",
    },
    {
      id: 2,
      title: "2-03 Donec porttitor augue",
      description:
        "Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.",
    },
    {
      id: 3,
      title: "3-03 Donec porttitor augue",
      description:
        "Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.",
    },
  ],

  fourColumnRow: [
    {
      id: 1,
      title: "01 Four Columns",
      description:
        "Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.",
    },
    {
      id: 2,
      title: "02 Four Columns",
      description:
        "Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.",
    },
    {
      id: 3,
      title: "03 Four Columns",
      description:
        "Morbi ac interdum metus. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.",
    },
    {
      id: 4,
      title: "04 Four Columns",
      description:
        "Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.",
    },
  ],

  socialLinks: [
    { id: "1", urlLink: "#facebook", iconClass: "fa fa-facebook" },
    { id: "1", urlLink: "#twitter", iconClass: "fa fa-twitter" },
    { id: "1", urlLink: "#behance", iconClass: "fa fa-behance" },
    { id: "1", urlLink: "#linkedin", iconClass: "fa fa-linkedin" },
  ],
});

export const getters = {
  getAboutContent(state) {
    return state.aboutContent;
  },

  getTwoColumnRow(state) {
    return state.twoColumnRow;
  },

  getThreeColumnRow(state) {
    return state.threeColumnRow;
  },

  getFourColumnRow(state) {
    return state.fourColumnRow;
  },

  getSocialLinks(state) {
    return state.socialLinks;
  },
};

export const mutations = {
  setAboutContent(state, menu) {
    state.aboutContent = menu;
  },

  setTwoColumnRow(state, menu) {
    state.twoColumnRow = menu;
  },

  setThreeColumnRow(state, menu) {
    state.threeColumnRow = menu;
  },

  setFourColumnRow(state, menu) {
    state.fourColumnRow = menu;
  },

  setSocialLinks(state, menu) {
    state.socialLinks = menu;
  },
};

export const actions = {};
