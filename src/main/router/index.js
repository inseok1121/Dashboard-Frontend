const mainRouter = [
  {
    path: '/main',
    redirect: '/main/dashboard'
  },
  {
    path: '/main/dashboard',
    name: 'Dashboard',
    component: () => import('../components/dashboard/DashboardView.vue')
  },
  {
    path: '/main/account',
    name: 'Account',
    component: () => import('../components/account/AccountView.vue')
  },
  {
    path: '/main/chart',
    name: 'Chart',
    component: () => import('../components/chart/ChartView.vue')
  },
  {
    path: '/main/rule',
    name: 'Rule',
    component: () => import('../components/rule/RuleView.vue')
  },
]

export default mainRouter ;