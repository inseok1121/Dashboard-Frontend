<template>
  <v-main>
    <v-container fruid grid-list-md>
      
      <v-layout wrap row>
        <v-col xs12 sm6 md3 class="pb-2" v-for="i in 4" :key="i">
          <v-card>
            <v-container pa-1>
              <v-layout row>
                <v-col xs7>
                  <v-card-title primay-title>
                    <div>
                      <div class="grey--text">전체 사용자</div>
                      <h3 class="headline">123</h3>
                    </div>
                  </v-card-title>
                </v-col>
                <v-col xs5>
                  <v-card-title primay-title>
                    <v-avatar>
                      <v-icon size="large" color="success">mdi-account</v-icon>
                    </v-avatar>
                  </v-card-title>
                </v-col>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-2">
                <v-icon size="small" color="primary">mdi-update</v-icon>
                <span class="grey--text caption font-italic">&nbsp;5분전</span>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-col>
      </v-layout>

      <v-layout wrap row>
        <v-col xs12 sm4 class="pb-2" v-for="i in 3" :key="i">
          <v-container pa-1>
            <v-layout row>
              <v-col xs7>
                <v-card-title primary-title>
                  <span class="grey--text">주간 게시물 현황</span>
                </v-card-title>
                <v-card-text>
                  <vue-apex-charts type="bar" :options="options" :series="series"></vue-apex-charts>
                </v-card-text>
              </v-col>
            </v-layout>
          </v-container>
        </v-col>
      </v-layout>

      <v-layout wrap row>
        <v-col xs12 sm4 class="pb-2" v-for="i in 2" :key="i">
          <v-card height="290px" :color="`#${i}54321`">
            간단한 차트
          </v-card>
        </v-col>
      </v-layout>

    </v-container>
  </v-main>
</template>

<script>
import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
export default defineComponent({
  components: {
    VueApexCharts,
  },
  setup() {
    const options = ref({
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    });
    const series = ref([
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ]);
    return { options, series };
  },
});
</script>

<style>

</style> 