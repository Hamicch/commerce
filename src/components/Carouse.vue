<template>
  <div id="carousel">
    <Slider animation="fade" v-model="sliderValue" :duration="5000" :speed="1000">
      <SliderItem v-for="item in carousel" :key="item.carouselId" >
        <img :src="carousel.carouselmage" class="img" />
      </SliderItem>
    </Slider>
  </div>
</template>

<script>

export default {
  name: "Carouse",
 
  data() {
    return {
             carousel: [
                     {
                        carouselId: 1,
                        carouselmage: require("@/assets/slide1.jpg")
                },
                {
                        carouselId: 2,
                        carouselmage: require("@/assets/slider2.jpg")
                },
                {
                        carouselId: 3,
                        carouselmage: require("@/assets/slider3.jpg")
                },
                {
                        carouselId: 4,
                        carouselmage: require("@/assets/slider4.jpg")
                }
        ],
    }
  }
};
</script>

<style scoped>
.img {
        width: 100%;
        height: 100%;
}
</style>