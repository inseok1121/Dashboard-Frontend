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

const fetchData = () => {
  return new Promise((resolve, reject) => {
    axios.get('/api/v1/account/name')
      .then((response) => {
        resolve(response.data); // 데이터 가져오기 성공 시 데이터를 resolve로 반환
      })
      .catch((error) => {
        reject(error); // 에러 발생 시 에러를 reject로 반환
      });
  });
};

fetchData()
  .then((result) => {
    counterStore.commit("setName",result);  
  })
  .catch((error) => {
    console.error('데이터를 불러오는 중 에러 발생:', error);

  });


