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
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  props: ['menuItems'],
  setup() {
    const name = ref('');
    const drawer = ref(true);
    const rail = ref(true);

    const fetchName = async () => {
      try {
        const response = await axios.get('/api/v1/account/name');
        const data = response.data;
        name.value = data;
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      }
    };
    const handleMenuClick = (routeName) => {
      // $emit을 사용하여 이벤트를 발생시킵니다.
      // 부모 컴포넌트에서 'menu-click' 이벤트를 리스닝하도록 합니다.
      // routeName을 인자로 전달합니다.
      this.$emit('menu-click', routeName);
    };

    onMounted(() => {
      fetchName();
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