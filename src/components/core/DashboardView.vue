<template>
  <v-main>
    <v-container fruid grid-list-md>
      
      <v-row wrap>
        <v-col xs12 sm6 md3 class="pb-2" v-for="i in 4" :key="i">
          <v-card>
            <v-container pa-1>
              <v-row>
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
              </v-row>
              <v-divider light></v-divider>
              <v-card-actions class="pa-2">
                <v-icon size="small" color="primary">mdi-update</v-icon>
                <span class="grey--text caption font-italic">&nbsp;5분전</span>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-col>
      </v-row>

      <v-row wrap>
        <v-col xs12 sm4 class="pb-2" v-for="i in 3" :key="i">
          <v-card>
            <v-container pa-1>
              <v-row>
                <v-col xs7>
                  <v-card-title primary-title>
                    <span class="grey--text">주간 게시물 현황</span>
                  </v-card-title>
                  <v-card-text>
                    <vue-apex-charts type="bar" :options="options" :series="series"></vue-apex-charts>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>

      <v-row wrap>
        <v-col xs12 sm4 class="pb-2" v-for="i in 2" :key="i">
          <v-card>
            <v-toolbar color="secondary" flat>
              <v-toolbar-title>최근 게시물</v-toolbar-title>
              <v-spacer></v-spacer>

              <v-btn color="white" icon="mdi-magnify"></v-btn>
            </v-toolbar>
            <v-list
              :items="items"
              item-props
              lines="two"
            >
              <template v-slot:subtitle="{ subtitle }">
                <div v-html="subtitle"></div>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

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

    const items = ref(
      [
        { type: 'subheader', title: 'Today' },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ]
    )
    return { options, series, items };
  },
});
</script>

<style>

</style> 