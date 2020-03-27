<template>
<div>
                <link href='https://fonts.googleapis.com/css?family=Ubuntu+Mono' rel='stylesheet' type='text/css'>
                <Header />
        <div class="container">
                <div class="row">
                        <div class="col-md-4">
                                <VueSlickCarousel v-bind="settings" class="vcimage">
                                        <div><img src="@/assets/shoe1.jpg" alt=""></div>
                                        <div><img src="@/assets/shoe2.jpg" alt=""></div>
                                        <div><img src="@/assets/shoe3.jpg" alt=""></div>
                                        <div><img src="@/assets/shoe4.jpg" alt=""></div>
                                </VueSlickCarousel>
                        </div>
                        <div class="col-md-6">
                                <div class="row">
                                        <div class="col-md-12">                                                
                                                <p class="newarrival text-center">NEW</p>
                                                <h2>{{ product.minidescription }}</h2>
                                                <p>Product Code: {{ product.productCode }}</p>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <p class="price">&#8358; {{ product.price }}</p>
                                                <p><b>Availability: </b>{{ product.availability }}</p>
                                                <p><b>Condition: </b>{{ product.condition }}</p>
                                                <p><b>Brand: </b>{{ product.brand }}</p>
                                                <label>Quantity:    </label>
                                                <input type="text" value="1">
                                                <button type="button" class="btn btn-default cart"> Add to cart</button>
                                        </div>
                                </div>
                        </div>
                        <div class="col-md-2">
                                <div class="row">
                                </div>
                        </div>
                </div>
        </div>
        <Footer />
</div>
</template>


<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default {
        name: 'MyComponent',
    components: { 
        VueSlickCarousel,
        Header,
        Footer

    },
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
    computed: {
            product() {
                    return this.$store.state.chosenProduct
            }
    }
}
</script>


<style scoped>

.container { 
        margin-top: 40px;
        margin-left: 10px;

}
.vcimage img {
        width: 350px;
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






.monospaced { font-family: 'Ubuntu Mono', monospaced ; }

.add-to-cart .btn-qty {
  width: 52px;
  height: 46px;
}

.add-to-cart .btn {
        border-radius: 0;
 }
</style>