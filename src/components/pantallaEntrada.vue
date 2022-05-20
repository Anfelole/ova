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
        <div class="content">
          <router-link :to="{ name: 'contenidos' }" class="text-decoration-none routernone">
            <v-img class="play mt-10 px-n12" src="../assets/logo.png.png"></v-img> 
          </router-link>
          <div class="sombra"></div>
          <BR></BR>
          <h1 class="title">TIPOS DE DATOS</h1>
        </div>
      </v-col>
    </v-row>
  
  </v-container>
  </v-main>


</v-app>


</template>

<style>

        .fondo{
          background-image: url(../assets/background.png)
          
        }
          .title{
            color: white;
          }
        .content{
            width: 100%;
        }

        .play{
            width: 290px;
            background-size: cover;
            animation: animar  1s infinite alternate;
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