<template>
  <v-app-bar :elevation="0">
    <v-toolbar-title class="font-weight-light">Dashboard</v-toolbar-title>
    <ul class="menu">
      <li>
        <v-btn @click="toPage">Page1</v-btn>
      </li>
      <li>
        <v-btn @click="toPage">Page2</v-btn>
      </li>
      <li>
        <h5>{{ this.counter }}</h5>
      </li>
    </ul>
  </v-app-bar>
</template>

<script>
import { useStore } from 'vuex';

export default {

  setup(){
    const store = useStore();

    const counter = store.state.counter.counter;

    const toPage = () => {
      console.log("TO PAGE1");
    };

    return {
      toPage,
      counter
    }
  }
  
}
</script>

<style>
  ul.menu li{ display: inline;}
</style>