export const state = () => ({
  listPosts: [
    {
      id: "1",
      srcThumb: require("assets/images/blog-thumb-01.jpg"),
      srcPost: require("assets/images/blog-post-01.jpg"),
      srcBanner: require("assets/images/banner-item-01.jpg"),
      altImage: "image",
      categoryPost: "Lifestyle",
      titlePost: {
        content: "Donec Tincidunt Leo Dicap",
        url: "donec-tincidunt-leo-dicap",
      },
      creatorPost: {
        content: "Admin",
        url: "#admin",
      },
      datePost: {
        content: "May 31, 2020",
        url: "#date31",
      },
      numberOfCommentsPost: {
        content: "12",
        url: "#comments12",
      },
      descriptionPost: `Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of 
        CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file
        on any template collection site for the download purpose. <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">
        Contact TemplateMo</a> for more info. Thank you.`,
      tagsPost: [
        { url: "best-templates", contentTag: "Best Templates" },
        { url: "nature", contentTag: "Nature" },
      ],
      socialMediaPost: [
        { url: "facebook", contentSocial: "Facebook" },
        { url: "twitter", contentSocial: "Twitter" },
      ],
      listComments: [
        {
          id: "1",
          srcAvatarImage: require("assets/images/comment-author-01.jpg"),
          altAvatarImage: "avatar",
          fullName: "Charles Kate",
          date: "May 16, 2020",
          message: `Fusce ornare mollis eros. Duis et diam vitae justo fringilla condimentum eu quis leo. Vestibulum id turpis porttitor sapien 
          facilisis scelerisque. Curabitur a nisl eu lacus convallis eleifend posuere id tellus.`,
        },
        {
          id: "2",
          srcAvatarImage: require("assets/images/comment-author-02.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 20, 2020",
          message: `In porta urna sed venenatis sollicitudin. Praesent urna sem, pulvinar vel mattis eget.`,
        },
        {
          id: "3",
          srcAvatarImage: require("assets/images/comment-author-03.jpg"),
          altAvatarImage: "avatar",
          fullName: "Belisimo Mama",
          date: "May 16, 2020",
          message: `Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula. 
          Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.`,
        },
        {
          id: "4",
          srcAvatarImage: require("assets/images/comment-author-02.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 22, 2020",
          message: `Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, 
          feugiat viverra leo.`,
        },
      ],
    },

    {
      id: "2",
      srcThumb: require("assets/images/blog-thumb-02.jpg"),
      srcPost: require("assets/images/blog-post-02.jpg"),
      srcBanner: require("assets/images/banner-item-02.jpg"),
      altImage: "image",
      categoryPost: "Healthy",
      titlePost: {
        content: "Etiam Id Diam Vitae Lorem Dictum",
        url: "etiam-id-diam-vitae-lorem-dictum",
      },
      creatorPost: {
        content: "Serban",
        url: "#serban",
      },
      datePost: {
        content: "July 24, 2020",
        url: "#date24",
      },
      numberOfCommentsPost: {
        content: "36",
        url: "#comments36",
      },

      descriptionPost: `You can support us by contributing a little via PayPal. Please contact <a rel="nofollow"
        href="https://templatemo.com/contact" target="_parent">TemplateMo</a> via Live Chat or Email. If you have any question or feedback 
        about this template, feel free to talk to us. Also, you may check other CSS templates such as <a rel="nofollow"
        href="https://templatemo.com/tag/multi-page" target="_parent">multi-page</a>, <a rel="nofollow" href="https://templatemo.com/tag/resume" 
        target="_parent">resume</a>, <a rel="nofollow" href="https://templatemo.com/tag/video" target="_parent">video</a>, etc.`,
      tagsPost: [
        { url: "beauty", contentTag: "Beauty" },
        { url: "nature", contentTag: "Nature" },
      ],
      socialMediaPost: [
        { url: "facebook", contentSocial: "Facebook" },
        { url: "twitter", contentSocial: "Twitter" },
      ],
      listComments: [
        {
          id: "1",
          srcAvatarImage: require("assets/images/comment-author-02.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 20, 2020",
          message: `In porta urna sed venenatis sollicitudin. Praesent urna sem, pulvinar vel mattis eget.`,
        },
        {
          id: "2",
          srcAvatarImage: require("assets/images/comment-author-03.jpg"),
          altAvatarImage: "avatar",
          fullName: "Belisimo Mama",
          date: "May 16, 2020",
          message: `Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula. 
          Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.`,
        },
        {
          id: "3",
          srcAvatarImage: require("assets/images/comment-author-02.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 22, 2020",
          message: `Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, 
          feugiat viverra leo.`,
        },
      ],
    },

    {
      id: "3",
      srcThumb: require("assets/images/blog-thumb-03.jpg"),
      srcPost: require("assets/images/blog-post-03.jpg"),
      srcBanner: require("assets/images/banner-item-03.jpg"),
      altImage: "image",
      categoryPost: "Lifestyle",
      titlePost: {
        content: "Donec Tincidunt Leo Nec Magna",
        url: "donec-tincidunt-leo-nec-magna",
      },
      creatorPost: {
        content: "Diana",
        url: "#diana",
      },
      datePost: {
        content: "May 14, 2020",
        url: "#date14",
      },
      numberOfCommentsPost: {
        content: "2",
        url: "#comments2",
      },
      descriptionPost: `Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet
        justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo.
        Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.`,
      tagsPost: [
        { url: "html-css", contentTag: "HTML CSS" },
        { url: "photoshop", contentTag: "Photoshop" },
      ],
      socialMediaPost: [
        { url: "facebook", contentSocial: "Facebook" },
        { url: "twitter", contentSocial: "Twitter" },
      ],
      listComments: [
        {
          id: "1",
          srcAvatarImage: require("assets/images/comment-author-01.jpg"),
          altAvatarImage: "avatar",
          fullName: "Belisimo Mama",
          date: "May 16, 2020",
          message: `Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula.
          Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.`,
        },
        {
          id: "2",
          srcAvatarImage: require("assets/images/comment-author-03.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 22, 2020",
          message: `Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet,
          feugiat viverra leo.`,
        },
      ],
    },

    {
      id: "4",
      srcThumb: require("assets/images/blog-thumb-04.jpg"),
      srcPost: require("assets/images/blog-post-01.jpg"),
      srcBanner: require("assets/images/banner-item-04.jpg"),
      altImage: "image",
      categoryPost: "Fashion",
      titlePost: {
        content: "Articol de test numarul 4",
        url: "article-test-4",
      },
      creatorPost: {
        content: "Admin",
        url: "#admin",
      },
      datePost: {
        content: "May 22, 2021",
        url: "#date31",
      },
      numberOfCommentsPost: {
        content: "12",
        url: "#comments12",
      },
      descriptionPost: `Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of
        CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file
        on any template collection site for the download purpose. <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">
        Contact TemplateMo</a> for more info. Thank you.`,
      tagsPost: [
        { url: "best-templates", contentTag: "Best Templates" },
        { url: "templatemo", contentTag: "TemplateMo" },
      ],
      socialMediaPost: [
        { url: "facebook", contentSocial: "Facebook" },
        { url: "twitter", contentSocial: "Twitter" },
      ],
      listComments: [
        {
          id: "1",
          srcAvatarImage: require("assets/images/comment-author-01.jpg"),
          altAvatarImage: "avatar",
          fullName: "Charles Kate",
          date: "May 16, 2020",
          message: `Fusce ornare mollis eros. Duis et diam vitae justo fringilla condimentum eu quis leo. Vestibulum id turpis porttitor sapien
          facilisis scelerisque. Curabitur a nisl eu lacus convallis eleifend posuere id tellus.`,
        },
        {
          id: "2",
          srcAvatarImage: require("assets/images/comment-author-02.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 20, 2020",
          message: `In porta urna sed venenatis sollicitudin. Praesent urna sem, pulvinar vel mattis eget.`,
        },
        {
          id: "3",
          srcAvatarImage: require("assets/images/comment-author-03.jpg"),
          altAvatarImage: "avatar",
          fullName: "Belisimo Mama",
          date: "May 16, 2020",
          message: `Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula.
          Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.`,
        },
        {
          id: "4",
          srcAvatarImage: require("assets/images/comment-author-02.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 22, 2020",
          message: `Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet,
          feugiat viverra leo.`,
        },
      ],
    },

    {
      id: "5",
      srcThumb: require("assets/images/blog-thumb-05.jpg"),
      srcPost: require("assets/images/blog-post-02.jpg"),
      srcBanner: require("assets/images/banner-item-05.jpg"),
      altImage: "image",
      categoryPost: "Healthy",
      titlePost: {
        content: "Articol de test numarul 5",
        url: "article-test-5",
      },
      creatorPost: {
        content: "Serban",
        url: "#serban",
      },
      datePost: {
        content: "May 12, 2020",
        url: "#date24",
      },
      numberOfCommentsPost: {
        content: "36",
        url: "#comments36",
      },
      descriptionPost: `You can support us by contributing a little via PayPal. Please contact <a rel="nofollow"
        href="https://templatemo.com/contact" target="_parent">TemplateMo</a> via Live Chat or Email. If you have any question or feedback
        about this template, feel free to talk to us. Also, you may check other CSS templates such as <a rel="nofollow"
        href="https://templatemo.com/tag/multi-page" target="_parent">multi-page</a>, <a rel="nofollow" href="https://templatemo.com/tag/resume"
        target="_parent">resume</a>, <a rel="nofollow" href="https://templatemo.com/tag/video" target="_parent">video</a>, etc.`,
      tagsPost: [
        { url: "beauty", contentTag: "Beauty" },
        { url: "nature", contentTag: "Nature" },
      ],
      socialMediaPost: [
        { url: "facebook", contentSocial: "Facebook" },
        { url: "twitter", contentSocial: "Twitter" },
      ],
      listComments: [
        {
          id: "1",
          srcAvatarImage: require("assets/images/comment-author-02.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 20, 2020",
          message: `In porta urna sed venenatis sollicitudin. Praesent urna sem, pulvinar vel mattis eget.`,
        },
        {
          id: "2",
          srcAvatarImage: require("assets/images/comment-author-03.jpg"),
          altAvatarImage: "avatar",
          fullName: "Belisimo Mama",
          date: "May 16, 2020",
          message: `Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula.
          Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.`,
        },
        {
          id: "3",
          srcAvatarImage: require("assets/images/comment-author-02.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 22, 2020",
          message: `Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet,
          feugiat viverra leo.`,
        },
      ],
    },

    {
      id: "6",
      srcThumb: require("assets/images/blog-thumb-06.jpg"),
      srcPost: require("assets/images/blog-post-03.jpg"),
      srcBanner: require("assets/images/banner-item-06.jpg"),
      altImage: "image",
      categoryPost: "Fashion",
      titlePost: {
        content: "Articol de test numarul 6",
        url: "article-test-6",
      },
      creatorPost: {
        content: "Diana",
        url: "#diana",
      },
      datePost: {
        content: "May 05, 2020",
        url: "#date14",
      },
      numberOfCommentsPost: {
        content: "2",
        url: "#comments2",
      },
      descriptionPost: `Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet
        justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo.
        Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.`,
      tagsPost: [
        { url: "html-css", contentTag: "HTML CSS" },
        { url: "photoshop", contentTag: "Photoshop" },
      ],
      socialMediaPost: [
        { url: "facebook", contentSocial: "Facebook" },
        { url: "twitter", contentSocial: "Twitter" },
      ],
      listComments: [
        {
          id: "1",
          srcAvatarImage: require("assets/images/comment-author-01.jpg"),
          altAvatarImage: "avatar",
          fullName: "Belisimo Mama",
          date: "May 16, 2020",
          message: `Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula.
          Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.`,
        },
        {
          id: "2",
          srcAvatarImage: require("assets/images/comment-author-03.jpg"),
          altAvatarImage: "avatar",
          fullName: "Thirteen Man",
          date: "May 22, 2020",
          message: `Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet,
          feugiat viverra leo.`,
        },
      ],
    },
  ],

  allTags: [],
  allCategorys: [],
  recentPosts: [],
  articleDetail: [],
  afterSearchPosts: [],
  afterPagination: [],
  afterPaginationFiltered: [],
  perPage: 1,
  totalPages: 6,
  currentPage: 1,
});

export const getters = {
  getListPosts(state) {
    return state.listPosts;
  },

  getAllTags(state) {
    return state.allTags;
  },

  getAllCategorys(state) {
    return state.allCategorys;
  },

  getRecentPosts(state) {
    return state.recentPosts;
  },

  getArticleDetail(state) {
    return state.articleDetail;
  },

  getSearchValue(state) {
    return state.afterSearchPosts;
  },

  getTagValue(state) {
    return state.afterSearchPosts;
  },

  getCategoryValue(state) {
    return state.afterSearchPosts;
  },

  getPerPage(state) {
    return state.perPage;
  },

  getTotalPages(state) {
    return state.totalPages;
  },

  getCurrentPage(state) {
    return state.currentPage;
  },

  getAfterPagination(state) {
    return state.afterPagination;
  },

  getAfterPaginationFiltered(state) {
    return state.afterPaginationFiltered;
  },
};

export const mutations = {
  setListPosts(state) {
    state.listPosts = menu;
  },

  setAllTags(state) {
    state.listPosts.forEach((post) => {
      state.allTags.push(post.tagsPost);
      state.allTags = [].concat(...state.allTags);
    });

    return (state.allTags = state.allTags.filter(
      (obj, index, arr) =>
        arr.findIndex((item) => item.contentTag === obj.contentTag) === index
    ));
  },

  setAllCategorys(state) {
    state.listPosts.forEach((post) => {
      state.allCategorys.push(post.categoryPost);
    });

    return (state.allCategorys = state.allCategorys.filter(
      (x, i, a) => a.indexOf(x) === i
    ));
  },

  setRecentPosts(state) {
    state.recentPosts = [];

    state.listPosts.forEach((post) => {
      state.recentPosts.push(post);
    });

    state.recentPosts.sort((a, b) => {
      let convertToDateStamp = new Date(
        String(a.datePost.content)
      ).toISOString();
      let convertToDateStamp2 = new Date(
        String(b.datePost.content)
      ).toISOString();

      return convertToDateStamp2.localeCompare(convertToDateStamp);
    });
    return state.recentPosts.splice(3, state.recentPosts.length);
  },

  setArticleDetails(state, valueSlug) {
    state.articleDetail = [];

    state.listPosts.forEach((post) => {
      state.articleDetail.push(post);
    });

    state.articleDetail = state.articleDetail.filter((item) => {
      return String(item.titlePost.url) == String(valueSlug);
    });
  },

  setSearchValue(state, searchValue) {
    state.afterSearchPosts = [];
    if (
      searchValue !== "" ||
      searchValue !== null ||
      searchValue !== undefined
    ) {
      state.listPosts.forEach((post) => {
        if (post.titlePost.content.toLowerCase().includes(searchValue)) {
          state.afterSearchPosts.push(post);
        }
      });
    } else {
      state.afterSearchPosts = state.listPosts;
    }
  },

  setTagValue(state, tagValue) {
    state.afterSearchPosts = [];

    state.listPosts.forEach((post) => {
      post.tagsPost.forEach((tag) => {
        if (tag.url.includes(tagValue)) {
          state.afterSearchPosts.push(post);
        }
      });
    });
  },

  setCategoryValue(state, categoryValue) {
    state.afterSearchPosts = [];

    state.listPosts.forEach((post) => {
      if (post.categoryPost.toLowerCase().includes(categoryValue)) {
        state.afterSearchPosts.push(post);
      }
    });
  },

  setCurrentPage(state, pageValue) {
    state.afterPagination = [];
    state.afterPaginationFiltered = [];
    state.currentPage = pageValue;

    let start = state.perPage * (state.currentPage - 1);
    let end = start + state.perPage;

    state.listPosts.slice(start, end).forEach((post) => {
      state.afterPagination.push(post);
    });

    state.afterSearchPosts.slice(start, end).forEach((post) => {
      state.afterPaginationFiltered.push(post);
    });
  },
};

export const actions = {
  getArticleData({ commit, dispatch, state }, valueSlug) {
    commit("setArticleDetails", `${valueSlug}`);
  },

  sendSearchValue({ commit, dispatch, state }, searchValue) {
    this.$router.push(`/blog/search/${searchValue}`);
    commit("setSearchValue", searchValue);
  },

  sendTagValue({ commit, dispatch, state }, tagValue) {
    this.$router.push(`/blog/tags/${tagValue}`);
    commit("setTagValue", tagValue);
  },

  sendCategoryValue({ commit, dispatch, state }, categoryValue) {
    this.$router.push(`/blog/category/${categoryValue}`);
    commit("setCategoryValue", categoryValue);
  },

  sendPageValue({ commit, dispatch, state }, pageValue) {
    commit("setCurrentPage", pageValue);
  },
};
