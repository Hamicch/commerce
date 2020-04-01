<<<<<<< HEAD
<template>
    <agile
        :nav-buttons="false"
        :autoplay-speed="5000"
        :speed="2500"
        fade
        pause-on-hover
        pause-on-dots-hover
        autoplay
        class="carousel"
    >
        <div class="slide">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2019/asos-summer-generic-hp-desktop-new.jpg  " alt class="responsive" />
        </div>
        <div class="slide">
            <img src="@/assets/Homeslider2.jpg" alt class="responsive"/>
        </div>
        <div class="slide">
            <img src="@/assets/Homeslider1.jpg" alt class="responsive"/>
        </div>
    </agile>
</template>

<script>
import { VueAgile } from "vue-agile";

import { v4 as uuidv4 } from "uuid";

export default {
    name: "Carouse",
    components: {
        agile: VueAgile
    },

    data() {
        return {
            images: [
                {
                    id: uuidv4(),
                    image: require("@/assets/slide1.jpg")
                },
                {
                    id: uuidv4(),
                    image: require("@/assets/slider2.jpg")
                },
                {
                    id: uuidv4(),
                    image: require("@/assets/slider3.jpg")
                },
                {
                    id: uuidv4(),
                    image: require("@/assets/slider4.jpg")
                }
            ]
        };
    }
};
</script>

<style scoped>
.carousel {
  margin-top: 30px;
}


.agile__dots {
    bottom: 10px;
    flex-direction: column;
    right: 30px;
    position: absolute;
}
.agile__dot {
    margin: 5px 0;
}
.agile__dot button {
    background-color: transparent;
    border: 1px solid #fff;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
    background-color: #fff;
}

.slide {
    display: block;
    height: 500px;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
}

.responsive {
  max-width: 100%;
  height: auto;
}
=======
<template>
  <div id="carousel">
      <Homeslider />
  </div>
  
    
</template>

<script>

import Homeslider from './layout/Homeslider'

export default {
  name: "Carouse",
  components: {
    Homeslider
  },
 
  data() {
    return {
           
    }
  }
};
</script>

<style scoped>

>>>>>>> 6b50da0022956462b1c535be2b1e2495eefbc600
</style>