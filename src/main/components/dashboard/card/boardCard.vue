<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>
        <span class="grey--text">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn  icon="mdi-magnify"></v-btn>
    </v-toolbar>
    <v-list
      :items="items"
      item-props
      lines="two"
    >
    </v-list>
  </v-card>
</template>
<script>
export default {
  props: ['title', 'items']
}
</script>