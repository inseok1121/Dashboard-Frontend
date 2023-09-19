<template>
  <v-card>
    <v-container pa-1>
      <v-row>
        <v-col xs3>
          <v-card-title primay-title>
            <div>
              <div class="grey--text">{{ title }}</div>
              <h3 class="headline">{{ number }}</h3>
            </div>
            </v-card-title>
        </v-col>
        <v-col xs5>
          <v-card-title primay-title align="center">
            <v-avatar >
              <v-icon size="large" :color="tIconColor" >{{ tIcon }}</v-icon>
            </v-avatar>
          </v-card-title>
        </v-col>
      </v-row>
      <v-divider light></v-divider>
      <v-card-actions class="pa-2">
        <v-icon size="small" :color="bIconColor">{{ bIcon }}</v-icon>
        <span class="grey--text caption font-italic">&nbsp;{{ bText }}</span>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: ['title', 'number', 'tIcon', 'tIconColor', 'bIcon', 'bIconColor', 'bText']
}

</script>