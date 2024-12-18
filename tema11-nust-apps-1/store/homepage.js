export const state = () => ({
  listActivities: [],
  activityModal: [],
  newIdActivity: 1,

  isOpenActivity: false,
  isOpenModalForm: false,
  editMode: false,
  editedToDoIndex: null,
  editedDataForm: null,
});

export const getters = {
  getNewActivity(state) {
    return state.listActivities;
  },

  getActivityModal(state) {
    return state.activityModal;
  },

  getDeleteActivity(state) {
    return state.isOpenActivity;
  },

  getModalFormState(state) {
    return state.isOpenModalForm;
  },

  getEditMode(state) {
    return state.editMode;
  },

  getEditedToDoIndex(state) {
    return state.editedToDoIndex;
  },

  getEditedDataForm(state) {
    return state.editedDataForm;
  },
};

export const mutations = {
  setListActivities(state) {
    return (state.listActivities =
      JSON.parse(localStorage.getItem("activityList")) == undefined ||
      JSON.parse(localStorage.getItem("activityList")) == null
        ? []
        : JSON.parse(localStorage.getItem("activityList")));
  },

  setNewActivity(state, activity) {
    let moment = require("moment");

    let addActivity = {
      id: "",
      name: "",
      fullData: "",
      time: "",
      description: "",
    };

    if (state.editMode) {
      console.log("Edited activity");

      state.listActivities[state.editedToDoIndex].name = activity.name;
      state.listActivities[state.editedToDoIndex].fullData =
        activity.dataActivity;
      state.listActivities[state.editedToDoIndex].time = moment(
        state.listActivities[state.editedToDoIndex].fullData
      ).format("H:m");
      state.listActivities[state.editedToDoIndex].description =
        activity.description;
    } else {
      console.log("New activity");

      addActivity.id = activity.id;
      addActivity.name = activity.name;
      addActivity.fullData = activity.dataActivity;
      addActivity.time = moment(addActivity.fullData).format("H:m");
      addActivity.description = activity.description;
      state.listActivities.push(addActivity);
    }

    localStorage.setItem("activityList", JSON.stringify(state.listActivities));
  },

  setEditedDataForm(state) {
    state.editedDataForm = state.listActivities[state.editedToDoIndex];
  },

  setCheckTime(state) {
    state.listActivities.forEach((item) => {
      if (String(item.fullData) == String(new Date())) {
        state.activityModal = [];
        state.activityModal.push(item);
        state.isOpenActivity = true;
      }
    });
  },

  setDeleteActivity(state, activityId, closeModal) {
    state.isOpenActivity = closeModal;
    state.listActivities = state.listActivities.filter(function (obj) {
      return obj.id !== activityId;
    });

    localStorage.setItem("activityList", JSON.stringify(state.listActivities));
  },

  setEditActivity(state, activityIdEdit) {
    // state.editMode = true;

    state.editedToDoIndex = state.listActivities.findIndex(
      (item) => item.id === activityIdEdit
    );

    // state.isOpenModalForm = true;
  },

  setOpenModalForm(state, stateModal) {
    state.isOpenModalForm = stateModal;
  },

  setCloseModalForm(state, stateModal) {
    state.isOpenModalForm = stateModal;
    state.editMode = false;
  },

  setEditMode(state, val) {
    state.editMode = val;
  },

  setIsOpenModalForm(state, val) {
    state.isOpenModalForm = val;
  },
};

export const actions = {
  newActivity({ commit, dispatch, state }, activity) {
    commit("setNewActivity", activity);
  },

  deleteActivity({ commit, dispatch, state }, activityId, closeModal) {
    commit("setDeleteActivity", activityId, closeModal);
  },

  editActivity({ commit, dispatch, state }, activityIdEdit) {
    commit("setEditActivity", activityIdEdit);

    commit("setEditMode", true);
    commit("setIsOpenModalForm", true);
  },

  closeModalForm({ commit, dispatch, state }, stateModal) {
    commit("setCloseModalForm", stateModal);
  },

  openModalForm({ commit, dispatch, state }, stateModal) {
    commit("setOpenModalForm", stateModal);
  },
};
