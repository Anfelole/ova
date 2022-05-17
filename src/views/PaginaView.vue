<template>
<!-- App.vue -->
<v-app>

    <v-app-bar
      app
      color="green"
      dar
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Unicordoba</v-toolbar-title>

      
      <v-spacer></v-spacer>

      

    <v-toolbar-items class="hidden-sm-and-down">
      <v-divider vertical></v-divider>

      
        <router-link to="/contenidos">
          <v-btn text class="cont">Contenidos</v-btn>
        </router-link>
      

      <v-divider vertical></v-divider>

      <v-btn text>
        <router-link to="/actividades">Actividades</router-link>
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        <router-link to="/evaluacion">Evaluacion</router-link>
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

<v-divider vertical></v-divider>
<v-spacer></v-spacer>
  
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item>
            <v-list-item-title>Unicordoba</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/contenidos">Contenidos</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/actividades">Actividades</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/evaluacion">Evaluacion</router-link></v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>



  <!-- Sizes your content based upon application components -->
  <v-main>
      
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
        <router-view></router-view>
      <!-- If using vue-router -->
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
 .cont{
   background-color: aqua;
   height: 100%;
   width: 100%;
   margin-top: 5px;
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

        data: () => ({
      drawer: false,
      group: null,

    }),

    methods:  {
      goContent() {
         
    },
    },

    watch: {
      group () {
        this.drawer = false
      },
    },

    
}
</script>
