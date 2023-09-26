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
import { defineComponent, ref } from "vue";
import TopNavBar from "./components/dashboard/TopNavBar.vue";
import ContentFooter from "./components/dashboard/ContentFooter.vue";
import MobileMenu from "./components/dashboard/MobileMenu.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    TopNavBar,
    ContentFooter,
    MobileMenu,
  },
  setup() {
    const menuItems = ref([
      {
        title: "Dashboard",
        route: "Dashboard",
        prependIcon: "mdi-view-dashboard",
      },
      { title: "My Account", route: "Account", prependIcon: "mdi-account" },
      {
        title: "Chart 분석",
        route: "Chart",
        prependIcon: "mdi-chart-line",
      },
      {
        title: "규칙 설정",
        route: "Rule",
        prependIcon: "mdi-bitcoin",
      },
    ]);

    const route = useRouter();

    const changeRoute = (routeName) => {
      route.push({ name: routeName });
    };
    return { menuItems, changeRoute };
  },
});
</script>
