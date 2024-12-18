export const state = () => ({
  headingSection: {
    sectionTitle: "MEET OUR BEAUTIFUL TEAM",
    sectionDescription:
      "We are a small team of designers and developers, who help brands with big ideas.",
  },

  teamListItems: [
    {
      srcImage: require("assets/images/team-1.png"),
      srcAlt: "Team",
      fullName: "ANNE HATHAWAY",
      jobTitle: "CEO / Marketing Guru",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      socialLinks: [
        {
          url: "#facebook",
          srcImage: require("assets/images/logo-facebook.png"),
          altImage: "facebook",
        },
        {
          url: "#twitter",
          srcImage: require("assets/images/logo-twitter.png"),
          altImage: "twitter",
        },
        {
          url: "#linkedin",
          srcImage: require("assets/images/logo-linkedin.png"),
          altImage: "linkedin",
        },
        {
          url: "#mail",
          srcImage: require("assets/images/logo-mail.png"),
          altImage: "mail",
        },
      ],
    },

    {
      srcImage: require("assets/images/team-1.png"),

      srcAlt: "Team",
      fullName: "Kate Upton",
      jobTitle: "Creative Director",
      jobDescription:
        "Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.",
      socialLinks: [
        {
          url: "#twitter",
          srcImage: require("assets/images/logo-twitter.png"),
          altImage: "twitter",
        },
        {
          url: "#linkedin",
          srcImage: require("assets/images/logo-linkedin.png"),
          altImage: "linkedin",
        },
        {
          url: "#mail",
          srcImage: require("assets/images/logo-mail.png"),
          altImage: "mail",
        },
      ],
    },

    {
      srcImage: require("assets/images/team-1.png"),
      srcAlt: "Team",
      fullName: "Olivia Wilde",
      jobTitle: "Lead Designer",
      jobDescription:
        "Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.",
      socialLinks: [
        {
          url: "#facebook",
          srcImage: require("assets/images/logo-facebook.png"),
          altImage: "facebook",
        },
        {
          url: "#twitter",
          srcImage: require("assets/images/logo-twitter.png"),
          altImage: "twitter",
        },
        {
          url: "#linkedin",
          srcImage: require("assets/images/logo-linkedin.png"),
          altImage: "linkedin",
        },
        {
          url: "#mail",
          srcImage: require("assets/images/logo-mail.png"),
          altImage: "mail",
        },
      ],
    },

    {
      srcImage: require("assets/images/team-1.png"),
      srcAlt: "Team",
      fullName: "Ashley Greene",
      jobTitle: "SEO / Developer",
      jobDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",

      socialLinks: [
        {
          url: "#facebook",
          srcImage: require("assets/images/logo-facebook.png"),
          altImage: "facebook",
        },
        {
          url: "#twitter",
          srcImage: require("assets/images/logo-twitter.png"),
          altImage: "twitter",
        },
        {
          url: "#mail",
          srcImage: require("assets/images/logo-mail.png"),
          altImage: "mail",
        },
      ],
    },
  ],
});

export const getters = {
  getHeadingSection(state) {
    return state.headingSection;
  },

  getTeamListItems(state) {
    return state.teamListItems;
  },
};

export const mutations = {
  setHeadingSection(state, menu) {
    state.headingSection = menu;
  },

  setTeamListItems(state, menu) {
    state.teamListItems = menu;
  },
};

export const actions = {};
