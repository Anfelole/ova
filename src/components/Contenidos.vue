<template>
  <div>
    <pagina-view>
      <template>
          <v-app>
             <div id="app" class="flex-container">
              
                <div class="card">             
                    <v-card elevation="13" height="350px">
                      <iframe 
                      src="https://www.youtube.com/embed/h6kJT_CeWLQ" 
                      title="Curso Básico de Javascript 7.- Ciclo For" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen></iframe>
                    </v-card>
                 </div>

                 <div class="card">
                      <v-card elevation="13" height="350px">
                        <iframe 
                        src="https://www.youtube.com/embed/51DHd4-zQi0" 
                        title="6.- Curso javaScript - Ciclo For" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </v-card>
                 </div>

                 <div class="card">
                   <v-card elevation="13" height="350px">
                        <iframe 
                         src="https://www.youtube.com/embed/ZK0cfptuHAI" 
                         title="#12 - Bucle for - Curso básico de JavaScript 2018" 
                         frameborder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowfullscreen></iframe>
                    </v-card>
                 </div>

                 <div class="card">
                   <v-card elevation="13" height="350px">
                        <iframe  
                        src="https://www.youtube.com/embed/1NzaAJoWcfk" 
                        title="Ejercicios prácticos con el ciclo for" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </v-card>
                 </div>
             </div>     
          </v-app>
      </template>
    </pagina-view>
  </div>

</template>

<style>
#app iframe {
  width: 100%;
  height: 100%;
}
.flex-container{
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 1em;
}
.card{
  width: 40rem;
  height:auto;
}

</style>

<script>
import PaginaView from "@/views/PaginaView.vue";

export default {
  name: 'contenidos',

  components: {
    PaginaView
  },
    data: () => ({
      
    })
}
</script>