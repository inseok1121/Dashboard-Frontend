<template>
  <v-card>
    <v-container pa-1>
      <v-row>
        <v-col xs7>
          <v-card-title primary-title>
            <span class="grey--text">{{ title }}</span>
          </v-card-title>
          <v-card-text>
            <vue-apex-charts :options="options" :series="series"></vue-apex-charts>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  components: {
    VueApexCharts,
  },

  props: ['title', 'series', 'options']
})
</script>