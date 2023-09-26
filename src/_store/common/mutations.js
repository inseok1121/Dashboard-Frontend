const mutations = {
  increment(state){
    state.counter = state.counter + 1;
  },
  setName(state, name){
    console.log(name);
    state.name = name;
  }
};

export default mutations;