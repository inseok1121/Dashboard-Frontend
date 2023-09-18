import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createStore } from 'vuex'

loadFonts()

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },

  mutations: {
    increment(state){
      state.counter = state.counter + 11;
    }
  }
});

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')

