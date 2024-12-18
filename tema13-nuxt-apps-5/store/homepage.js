export const state = () => ({
  albumsData: [],
  allUniqueAlbumId: [],
  resultsArray: [],
  newArr: [],
});

export const getters = {
  getGetData(state) {
    return state.albumsData;
  },
  getAlbumsIdArray(state) {
    return state.allUniqueAlbumId;
  },

  getFilterData(state) {
    return state.resultsArray;
  },
};

export const mutations = {
  setGetData: (state, dataArray) => (state.albumsData = [...dataArray]),

  setAlbumsIdArray(state) {
    state.albumsData.forEach((item) => {
      if (!(state.allUniqueAlbumId.indexOf(item.albumId) > -1)) {
        state.allUniqueAlbumId.push(item.albumId);
      }
    });
  },

  setFilterData(state, filterValue) {
    if (filterValue == null) {
      let arrayOfItems = [];
      state.resultsArray = [];

      let grp = state.albumsData.reduce((group, product) => {
        const { albumId } = product;
        group[albumId] = group[albumId] ?? [];
        group[albumId].push(product);
        return group;
      }, {});

      for (const obj in grp) {
        arrayOfItems.push({ albumId: obj, items: grp[obj].slice(0, 3) });
      }
      
      arrayOfItems.map((item) => {
        return state.resultsArray.push(...item.items);
      });
    } else {
      state.resultsArray = state.albumsData.filter(
        (album) => album.albumId == filterValue
      ).slice(0, 10);
    }
  },
};

export const actions = {
  sendDataArray({ commit, dispatch, state }, dataArray) {
    commit("setGetData", dataArray);
  },

  sendFilterValue({ commit, dispatch, state }, filterValue) {
    commit("setFilterData", filterValue);
  },
};
