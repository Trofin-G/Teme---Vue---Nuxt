export const state = () => ({
  inputStepOne: [
    {
      id: 1,
      value: "Standard",
    },
    {
      id: 2,
      value: "PC Solution",
    },
    {
      id: 3,
      value: "Payzone",
    },
    {
      id: 4,
      value: "Colet Expres",
    },
    {
      id: 5,
      value: "T4 FOC",
    },
    {
      id: 6,
      value: "AVM",
    },
    {
      id: 7,
      value: "POS",
    },
    {
      id: 8,
      value: "T4 cu Surcharge",
    },
    {
      id: 9,
      value: "Western Union",
    },
  ],
});

export const getters = {
  getInputStepOne(state) {
    return state.inputStepOne;
  },
};

export const mutations = {
  setInputStepOne: (state, input) => (state.inputStepOne = input),
};

export const actions = {};
