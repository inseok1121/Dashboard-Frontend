import { createStore } from "vuex";
import state from "./state.js"
import mutations from "./mutations.js"
import getters from "./getters.js"
import actions from "./actions.js"

const commonStore = createStore({
  state,
  mutations,
  getters,
  actions
})

export default commonStore;