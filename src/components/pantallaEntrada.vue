<template>
  <v-app>
    <v-main class="fondo fill-height">
      <v-container>
        <v-row class="pt-15">
          <v-col>
            <div class="bounce"><span class="letter">G</span><span class="letter">o</span><span class="letter">o</span><span class="letter">g</span><span class="letter">l</span><span class="letter">e</span></div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col align="center">
            <input type="button"/>
            <div class="fondo2 " >
              <div class="pt-16 imagen">
                <router-link :to="{ name: 'contenidos' }" class="text-decoration-none routernone mb-4" >
                  <v-img class="play mt-10" src="../assets/logo.png.png"></v-img> 
                </router-link>
                <div class="sombra"></div>
              </div>                     
            </div>        
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/*=== texto ===*/

.bounce {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  width: 100%;
  height: 100%;
  font: normal bold 6rem "Product Sans", sans-serif;
  white-space: nowrap;
}

.letter {
  -webkit-animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
          animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  margin-top: 0.5em;
  text-shadow: rgba(0, 0, 0, 0.4) 0 0 0.05em;
  font: normal bold 6rem "Product Sans", sans-serif;
}
.letter:nth-child(1) {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
  color: #4285f4;
}
.letter:nth-child(2) {
  -webkit-animation-delay: 0.0833333333s;
          animation-delay: 0.0833333333s;
  color: #ea4335;
}
.letter:nth-child(3) {
  -webkit-animation-delay: 0.1666666667s;
          animation-delay: 0.1666666667s;
  color: #fbbc05;
}
.letter:nth-child(4) {
  -webkit-animation-delay: 0.25s;
          animation-delay: 0.25s;
  color: #4285f4;
}
.letter:nth-child(5) {
  -webkit-animation-delay: 0.3333333333s;
          animation-delay: 0.3333333333s;
  color: #34a853;
}
.letter:nth-child(6) {
  -webkit-animation-delay: 0.4166666667s;
          animation-delay: 0.4166666667s;
  color: #ea4335;
}

@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    text-shadow: rgba(0, 0, 0, 0.4) 0 0 0.05em;
  }
  100% {
    -webkit-transform: translate3d(0, -1em, 0);
            transform: translate3d(0, -1em, 0);
    text-shadow: rgba(0, 0, 0, 0.4) 0 1em 0.35em;
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    text-shadow: rgba(0, 0, 0, 0.4) 0 0 0.05em;
  }
  100% {
    -webkit-transform: translate3d(0, -1em, 0);
            transform: translate3d(0, -1em, 0);
    text-shadow: rgba(0, 0, 0, 0.4) 0 1em 0.35em;
  }
}

/*==============*/
.fondo{
  background: url(https://www.apañados.es/images/images33/gif-david-whyte-4.gif) no-repeat;
  background-size: 100% 100%;
}

.play{
    width: 150px;
    background-size: cover;
    animation: animar  1s infinite alternate;
    
    }
.fondo2{
  border-radius: 40px ;
  border: #0f0f0f5d;
  width: 20rem;
  height: 24rem;
  background: #49474746; 
}
.fondo2, main{
   display: flex;
  justify-content: center;
  align-items: center;
}
.sombra{
    height: 100px;
    width: 300px;
    background:rgba(255, 255, 255, 0.795);
    border-radius: 50%;
    transform: rotatex(-80deg);
    animation: sombra 1s infinite alternate; 
}
@import url('https://fonts.googleapis.com/css2?family=Passion+One&display=swap');

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