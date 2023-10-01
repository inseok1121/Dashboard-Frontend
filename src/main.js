import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './_plugins/vuetify'
import { loadFonts } from './_plugins/webfontloader'
import { router } from './_router'
import store from './_store'
import axios from 'axios'

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(store)
app.use(router)


app.config.globalProperties.$axios = axios

app.mount('#app')