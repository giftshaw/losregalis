<template>
    <div class="carousel">
        <v-carousel hide-delimiters
        show-arrows-on-hover
        height="500"
        cycle="true"
        dark="true"
        interval="6000">
          <v-carousel-item v-for="(item,index) in items" :key="index" :src="item.image"
    ></v-carousel-item>
  </v-carousel>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }, 

  data(){
    return {
        items: [
        {
          image: require("@/assets/caurosel/slideone.jpg")
        },
        {
          image: require("@/assets/caurosel/slidetwo.jpg")
        },
        {
          image: require("@/assets/caurosel/slidethree.jpg")
        },
        {
          image: require("@/assets/caurosel/slidefour.jpeg")
        }
      ]
    }
  }
};
</script>