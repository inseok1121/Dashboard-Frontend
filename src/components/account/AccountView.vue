<template>
  <v-main>
    <v-container>
      <button @click="addOne">BUTTON</button>
    </v-container>
  </v-main>
</template>
<script>

import { defineComponent } from "vue";
import { useStore } from 'vuex';

export default defineComponent({
  
  setup() {
    const store = useStore();
    
    const addOne = () => {
      console.log("AddOne");
      store.commit('increment')
    }

    return {
      addOne
    }
  }
});
</script>