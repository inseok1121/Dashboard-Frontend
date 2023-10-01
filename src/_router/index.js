import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';
import mainRouter from '../main/router';
import globalRouter from '../global/router';

const routes = [
  ...mainRouter,
  ...globalRouter,
  {
    path: "/main",
    component : () => import('../main/views/main.vue'),
    children: mainRouter,
    meta: {
      requiredAuth : true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const store = useStore();

router.beforeEach((to, from, next) => {

  if(to.path === '/login'){
    next();
  }else{
      if(to.meta.requiredAuth && isLoggedIn()){
      console.log("RequiredAuth is True");
      next();
    }else{
      console.log("RequiredAuth is False");
      next('/login');
    }
  }
})

function isLoggedIn(){
  console.log(store);
  return true;
}

export { router }