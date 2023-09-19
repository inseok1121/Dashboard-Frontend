import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import counterStore from './store/common'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(counterStore)
  .mount('#app')

