<template>

  <pagina-view>
    <center>
    <div class="credits">
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src">
    
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1 v-if="i==0">Aly Culchac</h1>
    <h1 v-if="i==1">Andres Lopez</h1>
    <h1 v-if="i==2">Dany Yepez</h1>
    <h1 v-if="i==3">Cesar Briceño</h1>
    </v-carousel-item>
    
  </v-carousel>
  </div>
  </center>
  </pagina-view>

</template>
<style>
.credits{
  height: 30rem;
  width: 20rem;
  font-style: italic;
  font-family: Georgia, 'Times New Roman', Times, serif;

}
</style>
<script>
import PaginaView from "@/views/PaginaView.vue";

export default {
  data () {
      return {
        items: [
          {
            src: 'http://productoslimav.unicordoba.edu.co/limav/wp-content/uploads/2020/09/foto_perfil_aly_culchac-ALI-BEN-HUR-CULCHAC-DE-LA-VEGA.jpg',
          },
          {
            src: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/278413780_2280079355468608_3640925282949857505_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFdYMVEDUVp3ymkpV38RX83Yb_hJ6dWs8xhv-Enp1azzHE__q7-3LlO42J0KpZOv09b9P4niBN8zntE7Ke6cUZh&_nc_ohc=Yp0i_uTdPaAAX-L8yEp&_nc_ht=scontent.fbaq1-1.fna&oh=00_AT98MPQNCs_7U5ecmkHYbtm5thU-HQn3ftFu6KwxZST1KA&oe=62DB63FE',
          },
          {
            src: 'https://scontent.fmtr1-1.fna.fbcdn.net/v/t39.30808-6/293826902_101914282609122_7311320655387555159_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGeNLeBaybq_g6SZK13IyGDSEtwpq-edG9IS3Cmr550b0Kv8Lr0TJezl7k48YuLwHeesjDW37Pxd66alBOvJdm7&_nc_ohc=Y1X34eHzm5IAX-e7imP&_nc_ht=scontent.fmtr1-1.fna&oh=00_AT8arftOwUuViXSKJ8ocQLkHmdMi55XUDmBY4Keewqyx2Q&oe=62DC3771',
          },
          {
            src: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-6/281221892_1003771437177855_3922048501055646368_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEor7xUKaQ3PeaEI3M-qCdqQFDV-JkT70xAUNX4mRPvTPgYEZ5TCk7zOh7VdtOLixgdEAtYra7NkUU2-dr90raP&_nc_ohc=CIY_jDDHGcoAX-ozj3j&_nc_ht=scontent.fbaq1-1.fna&oh=00_AT_9ZpU84yR4A5HmQ1KIkPksrihf-K1Dxvz3FWBWTN9JWw&oe=62DB4E95',
          },
        ],
      }
    },
  name: 'evaluacion',

  components: {
    PaginaView
}
}
</script>