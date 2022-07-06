<template>
<pagina-view>
<div id="h5p-actividad_1">
<p class="descripcion">Arrastra las palabras segun lo que se deseche en cada caneca</p>
</div>
</pagina-view>
</template>

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
