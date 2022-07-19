import Vue from 'vue'
import VueRouter from 'vue-router'
import pantallaEntrada from '../views/EntradaView.vue'
import Actividades from "@/components/Actividades.vue"
import Contenidos from "@/components/Contenidos.vue"
import Evaluacion from "@/components/Evaluacion.vue"
import Creditos from "@/components/Creditos.vue"
import ejercicio1 from '@/components/actividades/ejercicio1'
import ejercicio2 from '@/components/actividades/ejercicio2'
import ejercicio3 from '@/components/actividades/ejercicio3'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'entrada',
    component: pantallaEntrada,
  },
  {
    path: '/contenidos',
    name: 'contenidos',
    component: Contenidos
  },
  {
    path: '/actividades',
    name: 'actividades',
    component: Actividades,
    children:[
      {
        path: '/ejercicio1',
        name: 'ejercicio1',
        component: ejercicio1,
      },
      {
        path: '/ejercicio2',
        name: 'ejercicio2',
        component: ejercicio2,
      },
      {
        path: '/ejercicio3',
        name: 'ejercicio3',
        component: ejercicio3,
      },]
  },
  {
    path: '/evaluacion',
    name: 'evaluacion',
    component: Evaluacion
  },
  {
    path: '/creditos',
    name: 'creditos',
    component: Creditos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
