<template>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://m.figurepresso.com/web/product/big/201704/5392_shop1_318802.jpg"
          :title="name"
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
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: ['menuItems'],
  emits: ['menu-click'],
  setup(props, ctx) {
    const store = useStore();
    const name = computed (() =>  store.state.name );
    const drawer = ref(true);
    const rail = ref(true);
    
   
    const handleMenuClick = (routeName) => {
      // $emit을 사용하여 이벤트를 발생시킵니다.
      // 부모 컴포넌트에서 'menu-click' 이벤트를 리스닝하도록 합니다.
      // routeName을 인자로 전달합니다.
      console.log("ttt");
      ctx.emit('menu-click', routeName);
    };

    onMounted(() => {
    });

    // 컴포넌트 내에서 사용 가능한 데이터와 메서드를 반환합니다.
    return {
      name,
      drawer,
      rail,
      handleMenuClick,
    };
  },
};
</script>