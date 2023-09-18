import {createWebHistory, createRouter} from 'vue-router'
import DashboardView from '@/components/dashboard/DashboardView'
import AccountView from '@/components/account/AccountView'
import ChartView from '@/components/chart/ChartView'
import RuleView from '@/components/rule/RuleView'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountView
  },
  {
    path: '/chart',
    name: 'Chart',
    component: ChartView
  },
  {
    path: '/rule',
    name: 'Rule',
    component: RuleView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;