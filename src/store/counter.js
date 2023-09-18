const counter = {
  namespaced: true,
  state: {
    counter: 0
  },

  getter: {

  },

  mutations: {
    incremnet(state){
      state.counter = state.counter + 1;
    }
  },

  actions: {

  },
};

export default counter;