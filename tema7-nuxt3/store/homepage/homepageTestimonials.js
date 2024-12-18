export const state = () => ({
  headingSection: {
    sectionTitle: "WHAT POEPLE SAY ABOUT US",
    sectionDescription: "Our clients love us!",
  },

  testimonialsListItems: [
    {
      srcImage: require("assets/images/testimonials-1.png"),
      srcAlt: "Testimonials",
      personQuote:
        "“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”",
      fullName: "CHANEL IMAN",
      jobTitle: "CEO of Pinterest",
    },
    {
      srcImage: require("assets/images/testimonials-1.png"),
      srcAlt: "Testimonials",
      personQuote:
        "“Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.”",
      fullName: "ADRIANA LIMA",
      jobTitle: "Founder of Instagram",
    },
    {
      srcImage: require("assets/images/testimonials-1.png"),
      srcAlt: "Testimonials",
      personQuote:
        "“Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.”",
      fullName: "ANNE HATHAWAY",
      jobTitle: "Lead Designer at Behance",
    },
    {
      srcImage: require("assets/images/testimonials-1.png"),
      srcAlt: "Testimonials",
      personQuote:
        "“Phasellus non purus vel arcu tempor commodo. Fusce semper, purus vel luctus molestie, risus sem cursus neque.”",
      fullName: "EMMA STONE",
      jobTitle: "Co-Founder of Shazam",
    },
  ],
});

export const getters = {
  getHeadingSection(state) {
    return state.headingSection;
  },

  getTestimonialsListItems(state) {
    return state.testimonialsListItems;
  },
};

export const mutations = {
  setHeadingSection(state, menu) {
    state.headingSection = menu;
  },

  setTestimonialsListItems(state, menu) {
    state.testimonialsListItems = menu;
  },
};

export const actions = {};
