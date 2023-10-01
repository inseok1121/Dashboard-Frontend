const mutations = {
  login(state){
    console.log("Success login");
    state.isLogin = true;
    state.name = "INSEOK SONG";
  },
};

export default mutations;