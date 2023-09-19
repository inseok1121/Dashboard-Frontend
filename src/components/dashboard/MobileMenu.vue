<template>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://m.figurepresso.com/web/product/big/201704/5392_shop1_318802.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item v-for="menuItem in menuItems" :key="menuItem.name" @click="handleMenuClick(menuItem.route)" :title="menuItem.title">
            <template v-slot:prepend>
              <v-icon>{{ menuItem.prependIcon }}</v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>
<script>
  export default {
    props: ['menuItems'],
    methods: {
      handleMenuClick(routeName){
        this.$emit('menu-click', routeName);
      }
    },
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
  }
</script>