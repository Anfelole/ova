<template>
<!-- App.vue -->
<v-app>

    <v-app-bar
      app
      class="color  white--text"
      dar
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Aprendiendo Ciclo For</v-toolbar-title>

      
      <v-spacer></v-spacer>

      

    <v-toolbar-items class="hidden-sm-and-down ">
      <v-divider vertical></v-divider>
      <v-btn 
        text
        to="/contenidos">Contenidos</v-btn>

      <v-divider vertical></v-divider>

      <v-btn 
       text
       to="/actividades">Actividades</v-btn>

      <v-divider vertical></v-divider>

      <v-btn 
        text
        to="/evaluacion">Evaluacion</v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

<v-divider vertical></v-divider>
<v-spacer></v-spacer>
  
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      bottom
      temporary
      class="menu"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text  white--text text--accent-4"
        >

          <v-list-item>
            <v-btn to="/" block
                text>
              Inicio
            </v-btn>
            
          </v-list-item>

          <v-list-item>
              <v-btn 
                block
                text
                to="/contenidos">Contenidos</v-btn>
          </v-list-item>

          <v-list-item>
              <v-btn 
                block
                text
                to="/actividades">Actividades</v-btn>
          </v-list-item>

          <v-list-item>

              <v-btn 
                block
                text
                to="/evaluacion">Evaluacion</v-btn>
            
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
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(135deg, #9558d9 0, #764dd7 25%, #4d42d4 50%, #003ad1 75%, #0034cf 100%);  

}
 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #6accb3;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.color{
background-image: radial-gradient(circle at 50% -20.71%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%);
}
.menu{
  background-image: linear-gradient(180deg, #bce5ff 0, #9db9f2 50%, #7e8fb3 100%);
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
