export const state = () => ({
  headingSection: {
    sectionTitle: "SERVICES WE PROVIDE",
    sectionDescription:
      "We are working with both individuals and businesses from all over the globe to create awesome websites and applications.",
  },

  servicesListItems: [
    {
      srcImage: require("assets/images/services-1.png"),
      srcAlt: "Service image",
      serviceTitle: "BRANDING",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
    },
    {
      srcImage: require("assets/images/services-2.png"),
      srcAlt: "Service image",
      serviceTitle: "DESIGN",
      serviceDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    },
    {
      srcImage: require("assets/images/services-3.png"),
      srcAlt: "Service image",
      serviceTitle: "DEVELOPMENT",
      serviceDescription:
        "At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.",
    },
    {
      srcImage: require("assets/images/services-4.png"),
      srcAlt: "Service image",
      serviceTitle: "ROCKET SCIENCE",
      serviceDescription:
        "Et harum quidem rerum est et expedita distinctio. Nam libero tempore.",
    },
  ],
});

export const getters = {
  getHeadingSection(state) {
    return state.headingSection;
  },

  getServicesListItems(state) {
    return state.servicesListItems;
  },
};

export const mutations = {
  setHeadingSection(state, menu) {
    state.headingSection = menu;
  },

  setServicesListItems(state, menu) {
    state.servicesListItems = menu;
  },
};

export const actions = {};
