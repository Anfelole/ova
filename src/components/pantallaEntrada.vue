<template>

  <v-app>




  <!-- Sizes your content based upon application components -->
 

<br><br><br><br><br><br><br><br><br>
<div class="context">
          <router-link :to="{ name: 'contenidos' }" class="text-decoration-none" >
            <div class="bounce" >
             <span class="letter">C</span><span class="letter">i</span><span class="letter">c</span><span class="letter">l</span><span class="letter">o</span><span class="letter">s</span>
            </div>
    </router-link>
    </div>

  

    


    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view></router-view>
    </v-container>

</v-app>
 

</template>

<style>


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