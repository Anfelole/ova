<template>
<!-- App.vue -->
<v-app>

  <v-app-bar app color="green" dense >
    <!-- -->
  <div id="app">
    <nav>
      <router-link to="/contenidos">Contenidos</router-link> |
      <router-link to="/actividades">Actividades</router-link> |
      <router-link to="/evaluacion">Evaluacion</router-link>
    </nav>
  </div>
  </v-app-bar>





  <!-- Sizes your content based upon application components -->
  <v-main>
      
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
      <slot></slot>
    </v-container>
  </v-main>







  <v-footer app color="primary lighten-1" padless>
    <!-- -->
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Universidad de Cordoba</strong>
      </v-col>
    </v-row>
  </v-footer>
</v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
    name: 'PaginaView',

}
</script>