<template>
<div>

<div class="actividaddiv" src="../" id="actividad1">
</div>


</div>
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
import { H5P } from 'h5p-standalone'
import PaginaView from "@/views/PaginaView.vue";
export default {
    data: () => ({
        
    }),

    mounted(){

         const el = document.getElementById('actividad1');
        const options = {
            h5pJsonPath: "../actividades/for",
            frameJs: "../actividades/profe/frame.bundle.js",
            frameCss: "../actividades/profe/styles/h5p.css",
        };
        new H5P (el, options);

    },
}
</script>