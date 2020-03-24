<template>
        <div class="container">
                <div class="row">
                        <div class="col-md-5">
                                <VueSlickCarousel v-bind="settings" class="vcimage">
                                        <div><img src="@/assets/shoe1.jpg" alt=""></div>
                                        <div><img src="@/assets/shoe2.jpg" alt=""></div>
                                        <div><img src="@/assets/shoe3.jpg" alt=""></div>
                                        <div><img src="@/assets/shoe4.jpg" alt=""></div>
                                </VueSlickCarousel>
                        </div>
                        <div class="col-md-7">
                                <div class="row">
                                        <div class="col-md-12">                                                
                                                <p class="newarrival text-center">NEW</p>
                                                <h2>Unisex Black Casual Sneakers</h2>
                                                <p>Product Code: ISYM2020</p>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <p class="price">USD $15.00</p>
                                                <p><b>Availability: </b>In Stock</p>
                                                <p><b>Condition: </b>New</p>
                                                <p><b>Brand: </b>Hamichino</p>
                                                <label>Quantity:    </label>
                                                <input type="text" value="1">
                                                <button type="button" class="btn btn-default cart"> Add to cart</button>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>


<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
        name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
                "lazyLoad": "ondemand",
                "dots": true,
                "fade": true,
                "infinite": true,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "autoplay": true,
                "speed": 8000,
                "autoplaySpeed": 2000,
                "cssEase": "linear"
        },
      }
    },
}
</script>


<style scoped>

.container { 
        margin-top: 100px;
}
.vcimage img {
        width: 400px;
}

.newarrival {
        background-color: red;
        color: #fff;
        width: 50px;
        font-size: 12px;
        font-weight: bold;
}


.col-md-7 h2 {
        color: #555;
}

.checked {
        color: orange;
}

.price {
         color: #fe988f;
         font-size: 20px;
         font-weight: bold;
         padding-top: 25px;
}

input {
        border: 1px solid #ccc;
        font-weight: bold;
        height: 33px;
        text-align: center;
        width: 30px;

}

.cart {
        background: #3E4551;
        font-size: 15px;
        margin-left: 28px;
}
</style>