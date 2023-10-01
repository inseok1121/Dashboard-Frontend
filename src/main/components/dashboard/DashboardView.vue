<template>
  <v-main>
    <v-container fruid grid-list-md>
      
      <v-row wrap>
        <v-col xs12 sm6 md3 class="pb-2">
          <small-card title="최근 게시물" number="343" tIcon="mdi-format-list-bulleted" tIconColor="success" bIcon="mdi-update" bIconColor="primary" bText="3시간 전"/>
        </v-col>

        <v-col xs12 sm6 md3 class="pb-2">
          <small-card title="전체 사용자" number="12" tIcon="mdi-account" tIconColor="primary" bIcon="mdi-account-multiple" bIconColor="primary" bText="2명 접속 중"/>
        </v-col>

        <v-col xs12 sm6 md3 class="pb-2">
          <small-card title="전체 조회수" number="431" tIcon="mdi-eye" tIconColor="info" bIcon="mdi-trending-down" bIconColor="error" bText="43 감소"/>
        </v-col>

        <v-col xs12 sm6 md3 class="pb-2">
          <small-card title="전체 게시물" number="334234" tIcon="mdi-view-module" tIconColor="warning" bIcon="mdi-trending-up" bIconColor="success" bText="256 감소"/>
        </v-col>
      </v-row>

      <v-row wrap>
        <v-col xs12 sm4 class="pb-2" >
          <chart-card title="주간 게시물 현황" :series="[{name: 'series-1', data: [30, 90, 45, 50, 49, 60, 70, 91]}]" :options="{chart: {type: 'line', id: 'vuechart-example1',},xaxis: {categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]}}"></chart-card>
        </v-col>

        <v-col xs12 sm4 class="pb-2" >
          <chart-card title="주간 사용자 현황" :series="[{name: 'series-2', data: [30, 40, 45, 50, 49, 60, 70, 91]}]" :options="{chart: {type: 'bar', id: 'vuechart-example2',},xaxis: {categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]}}"></chart-card>
        </v-col>

        <v-col xs12 sm4 class="pb-2" >
          <chart-card title="주간 조회수 현황" :series="[{name: 'series-3', data: [30, 40, 45, 50, 49, 60, 70, 91]}]" :options="{chart: {type: 'area', id: 'vuechart-example3',},xaxis: {categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]}}"></chart-card>
        </v-col>
      </v-row>

      <v-row wrap>
        <v-col xs12 sm4 class="pb-2">
          <board-card title="주간 게시물 현황" :items="[{ type: 'subheader', title: 'Today' },{prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',title: 'Brunch this weekend?', subtitle: 'Ali Connors — I will be in your neighborhood doing errands this weekend. Do you want to hang out?'},{ type: 'divider', inset: true },{prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',title: 'Summer BBQ', subtitle: `to Alex, Scott, Jennifer &mdash; Wish I could come, but I'm out of town this weekend.`},{ type: 'divider', inset: true },{prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',title: 'Oui oui',subtitle: `Sandra Adams &mdash; Do you have Paris recommendations? Have you ever been?`}]"></board-card>
        </v-col>
        <v-col xs12 sm4 class="pb-2">
          <board-card title="주간 게시물 현황" :items="[{ type: 'subheader', title: 'Today' },{prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',title: 'Brunch this weekend?', subtitle: 'Ali Connors — I will be in your neighborhood doing errands this weekend. Do you want to hang out?'},{ type: 'divider', inset: true },{prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',title: 'Summer BBQ', subtitle: `to Alex, Scott, Jennifer &mdash; Wish I could come, but I'm out of town this weekend.`},{ type: 'divider', inset: true },{prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',title: 'Oui oui',subtitle: `Sandra Adams &mdash; Do you have Paris recommendations? Have you ever been?`}]"></board-card>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script>
import { defineComponent } from "vue";
import smallCard from './card/smallCard.vue'
import chartCard from './card/chartCard.vue'
import boardCard from './card/boardCard.vue'

export default defineComponent({
  components: {
    smallCard,
    chartCard,
    boardCard
  },
  setup() {

  },
});
</script>

<style>

</style> 