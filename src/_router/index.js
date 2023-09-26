import { createRouter, createWebHistory } from 'vue-router';
import  globalRouter from '../global/router';
import mainRouter  from '../main/router';

const routes = [
  ...globalRouter,
  ...mainRouter
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }