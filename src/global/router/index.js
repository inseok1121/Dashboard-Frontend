const globalRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
];

export default globalRouter;