export const state = () => ({
  articlesList: [
    {
      id: 1,
      title:
        "Valoarea maximă a tichetului de masă devine 20,09 de lei pentru fiecare zi lucrată",
      url: "#",
      date: "13.10.2021",
      img: "https://via.placeholder.com/285x190",
    },
    {
      id: 2,
      title: "Ordonanța militară nr. 10 din 27.04.2020",
      url: "#",
      date: "31.03.2020",
      img: "https://via.placeholder.com/285x190",
    },
    {
      id: 3,
      title: "ORDONANȚA DE URGENTĂ nr. 49/2020",
      url: "#",
      date: "31.03.2020",
      img: "https://via.placeholder.com/285x190",
    },
    {
      id: 4,
      title: "Modificări legislative privind voucherele de vacanță",
      url: "#",
      date: "31.03.2020",
      img: "https://via.placeholder.com/285x190",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet",
      url: "#",
      date: "31.03.2020",
      img: "https://via.placeholder.com/285x190",
    },
  ],
});

export const getters = {
  getArticlesList(state) {
    return state.articlesList;
  },
};

export const mutations = {
  setArticlesList: (state, article) => (state.articlesList = article),
};

export const actions = {};
