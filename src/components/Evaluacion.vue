<template>

  <pagina-view>
   <v-card class="actividaddiv" src="../" id="actividad1"></v-card>
  </pagina-view>

</template>
<style>
.tituloact1{
    text-align: center;
}

.actividaddiv{
    background-color: white;
    border-radius: 20px;
    padding: 20px;
}
</style>
<script>
import PaginaView from "@/views/PaginaView.vue";
import { H5P } from 'h5p-standalone'
export default {

      data: () => ({
        
    }),

    mounted(){

         const el = document.getElementById('actividad1');
        const options = {
            h5pJsonPath: "../actividades/Quiz",
            frameJs: "../actividades/profe/frame.bundle.js",
            frameCss: "../actividades/profe/styles/h5p.css",
        };
        new H5P (el, options);

    },

  name: 'evaluacion',

  components: {
    PaginaView
}
}
</script>