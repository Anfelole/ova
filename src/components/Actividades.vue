<template>
<pagina-view>
  <template>

<v-container>
<router-view></router-view>

<div class="allactivities">
<v-btn class="botonsig" to="/ejercicio1">ACTIVIDAD 1</v-btn>
<v-btn class="botonsig" to="/ejercicio2">ACTIVIDAD 2</v-btn>
<v-btn class="botonsig" to="/ejercicio3">ACTIVIDAD 3</v-btn>
</div>

</v-container>

</template>


</pagina-view>
</template>
<style>

.allactivities{
    text-align: center;
}

.botonsig{
    margin-top: 10px;
    margin: 5px;
    
}

</style>
<script>
import PaginaView from "@/views/PaginaView.vue";
import { H5P } from 'h5p-standalone';

export default {
     data: () => ({
        
    }),
  name: 'actividades',

  components: {
    PaginaView
},

  mounted(){
        const el = document.getElementById('h5p-actividad_1');
        const options = {
            h5pJsonPath: "../actividades/for",
            frameJs: "../actividades/profe/frame.bundle.js",
            frameCss: "../actividades/styles/h5p.css",
        };
        new H5P(el, options);
    },
}
</script>
