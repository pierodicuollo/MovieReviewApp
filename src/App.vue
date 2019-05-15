<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <router-link class="title" v-bind:to="{ name: 'Home' }">
        <v-toolbar-title>Movie Review App</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-bind:to="{ name: 'AddMovie' }">Add Movie</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text footer-text">&copy; Piero Di Cuollo 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>


