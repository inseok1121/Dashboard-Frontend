const mainRouter = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/dashboard/DashboardView.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../components/account/AccountView.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../components/chart/ChartView.vue')
  },
  {
    path: '/rule',
    name: 'Rule',
    component: () => import('../components/rule/RuleView.vue')
  },
]

export default mainRouter ;