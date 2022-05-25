<template>
<!-- App.vue -->

<v-app>
  <!-- Sizes your content based upon application components -->
  <v-main class="fondo">

    <!-- Provides the application the proper gutter -->
    <v-container>
    <br><br>
    <v-row no-gutters>
      <v-col align="center">
        <input type="button"/>
        <div class="content fondo2 imagen" >
          
          <div class="">
          <router-link :to="{ name: 'contenidos' }" class="text-decoration-none routernone mb-4" >
            <v-img class="play " src="../assets/logo.png.png"></v-img> 
          </router-link>
          
          <div class="sombra"></div>
          </div>
        </div>
        <v-row>
          <v-col> 
            <div class="text">
          <h1 class=".display-4 font-weight-black" >TIPOS DE DATOS</h1>
          </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  
  </v-container>
  </v-main>


</v-app>


</template>

<style>
        .text{
          color: blue;
          margin: 2rem;
        }
        .fondo{
          background-image: url(../assets/background.png);          
        }
       
        .content{
            width: 100%;
            height: 80%;
            display: flex;
        }

        .play{
            width: 150px;
            background-size: cover;
            animation: animar  1s infinite alternate;
            }
        .fondo2{
          border: 1px solid #fff;
          border-radius: 10px;
          width: 30rem;
          height: 24rem;
          background-color: #fff;
          opacity: 0.7;
          align-items: center;
          display: flex;
          align-content: center;
          justify-content: center;

        }

        .sombra{
            height: 100px;
            width: 300px;
            background:rgb(168, 168, 168);
            border-radius: 50%;
            transform: rotatex(-80deg);
            animation: sombra 1s infinite alternate;
           
            
        }
        @keyframes animar{
            to{
                transform: translateY(-50px)
            } 
        }

        @keyframes sombra{
            to{
                transform: scale(0.6) rotateX(-70deg);
                opacity: 0.2;
            }
        }
      
</style>


<script>
export default {
  name: "PantallaEntrada",
  data: () => ({

  }),

  beforeDestroy() {
    },
};
</script>