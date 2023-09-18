<template>
  <v-app>
    <mobile-menu app :menuItems="menuItems" @menu-click="changeRoute"/>
    <h1>{{routeName}}</h1>
    <top-nav-bar app/>
    <router-view app/>
    <content-footer app/>  
  </v-app>
</template>

<script>
import TopNavBar from './components/dashboard/TopNavBar.vue'
import ContentFooter from './components/dashboard/ContentFooter.vue'
import MobileMenu from './components/dashboard/MobileMenu.vue'

export default {
  name: 'App',

  components: {
    TopNavBar,
    ContentFooter,
    MobileMenu
  },

  data: () => ({
    menuItems: [
      { title: 'Dashboard', route: 'Dashboard', prependIcon: 'mdi-view-dashboard' },
      { title: 'My Account', route: 'Account', prependIcon: 'mdi-account' },
      { title: 'Chart 분석', route: 'Chart', prependIcon: 'mdi-chart-line' },
      { title: '규칙 설정', route: 'Rule', prependIcon: 'mdi-bitcoin'}
    ],
  }),

  methods: {
    changeRoute(routeName){
      this.$router.push({ name : routeName });
    }
  }
}
</script>
