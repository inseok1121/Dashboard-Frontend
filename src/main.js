import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import counterStore from './store/common'
import axios from 'axios'

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(counterStore)
app.config.globalProperties.$axios = axios
app.mount('#app')

