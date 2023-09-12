<template>
  <v-app>
    <mobile-menu app/>
    <top-nav-bar app/>
    <dashboard-view app/>
    <content-footer app/>  
  </v-app>
</template>

<script>
import TopNavBar from './components/core/TopNavBar.vue'
import DashboardView from './components/core/DashboardView.vue'
import ContentFooter from './components/core/ContentFooter.vue'
import MobileMenu from './components/core/MobileMenu.vue'

export default {
  name: 'App',

  components: {
    TopNavBar,
    DashboardView,
    ContentFooter,
    MobileMenu
  },

  data: () => ({
    //
  }),
}
</script>
