<template>
  <v-app class="contenedor">
    <div style="overflow: hidden;" class="wabe">
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style="fill: #2484b8; width: 222%; height: 423px; transform: scaleX(-1);"
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
  </svg>
</div>
    <v-main class="fondo fill-height">
        <v-row class="pt-8">
          <v-col>
            <div class="bounce">
              <span class="letter"><strong>C</strong></span>
              <span class="letter"><strong>I</strong></span>
              <span class="letter"><strong>C</strong></span>
              <span class="letter"><strong>L</strong></span>
              <span class="letter"><strong>O</strong></span>
              <span class="letter"><strong>S</strong></span>
            </div>
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
    </v-main>
    <div style="overflow: hidden;">
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style="fill: #2484b8; width: 222%; height: 478px; transform: rotate(180deg) scaleX(-1);"
  >
    <path d="M1200 120L0 16.48V0h1200v120z" />
  </svg>
</div>
  </v-app>
</template>

<style>
.fondo{
   position:absolute;
   z-index:10;
   right: 7rem;
   left:7rem;
   top: -100px;

}
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
  background: #2c2c2cab; 
}
.fondo2 ,main{
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