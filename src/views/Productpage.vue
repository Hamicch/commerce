<template>
    <div>
        <link
            href="https://fonts.googleapis.com/css?family=Ubuntu+Mono"
            rel="stylesheet"
            type="text/css"
        />
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <VueSlickCarousel v-bind="settings" class="vcimage">
                        <div>
                            <img src="@/assets/shoe1.jpg" alt />
                        </div>
                        <div>
                            <img src="@/assets/shoe2.jpg" alt />
                        </div>
                        <div>
                            <img src="@/assets/shoe3.jpg" alt />
                        </div>
                        <div>
                            <img src="@/assets/shoe4.jpg" alt />
                        </div>
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
                            <p>
                                <b>Availability:</b>
                                {{ product.availability }}
                            </p>
                            <p>
                                <b>Condition:</b>
                                {{ product.condition }}
                            </p>
                            <p>
                                <b>Brand:</b>
                                {{ product.brand }}
                            </p>
                            <label>Quantity:</label>
                            <input type="text" value="1" />
                            <button type="button" class="btn btn-danger cart">
                                <i class="fas fa-shopping-cart mr-1"></i> Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row">
                        <mdb-card-group>
                            <mdb-card class="card">
                                <mdb-card-body>
                                    <mdb-card-title tag="h5">Hi there!</mdb-card-title>
                                    <mdb-card-text>Hi there!</mdb-card-text>
                                    <!-- <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text> -->
                                </mdb-card-body>
                            </mdb-card>
                            <mdb-card class="card-1">
                                <mdb-card-body>
                                    <mdb-card-title tag="h5">Hi there!</mdb-card-title>
                                    <mdb-card-text>Hi there!</mdb-card-text>
                                    <!-- <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text> -->
                                </mdb-card-body>
                            </mdb-card>
                        </mdb-card-group>
                        <mdb-card-group>
                            <mdb-card class="card-2">
                                <mdb-card-body>
                                    <mdb-card-title tag="h5">Hi there!</mdb-card-title>
                                </mdb-card-body>
                            </mdb-card>
                        </mdb-card-group>
                        <mdb-card-group>
                            <mdb-card class="card-3">
                                <mdb-card-body>
                                    <mdb-card-title tag="h5">Hi there!</mdb-card-title>
                                    <mdb-card-text>Hi there!</mdb-card-text>
                                </mdb-card-body>
                            </mdb-card>
                        </mdb-card-group>
                    </div>
                </div>
            </div>
        </div>
        <mdb-container>
            <mdb-tabs
                :active="0"
                default
                :links="[
        { text: 'Home' },
        { text: 'Profile' },
        { text: 'Contact' }]"
                :content="[
        `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
        `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
        `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
            />
        </mdb-container>
        <Footer />
    </div>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardGroup,
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbTabs,
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbTextarea,
    mdbInput
} from "mdbvue";

export default {
    name: "MyComponent",
    components: {
        VueSlickCarousel,
        Header,
        Footer,
        mdbCard,
        mdbCardBody,
        mdbCardGroup,
        mdbCardTitle,
        mdbCardText
    },
    data() {
        return {
            settings: {
                lazyLoad: "ondemand",
                dots: true,
                fade: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 8000,
                autoplaySpeed: 2000,
                cssEase: "linear"
            }
        };
    },
    computed: {
        product() {
            return this.$store.state.chosenProduct;
        }
    }
};
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
    background: #3e4551;
    font-size: 15px;
    margin-left: 28px;
}

p b {
    font-weight: bold;
}

label {
    font-weight: bold;
}

.monospaced {
    font-family: "Ubuntu Mono", monospaced;
}

.add-to-cart .btn-qty {
    width: 52px;
    height: 46px;
}

.add-to-cart .btn {
    border-radius: 0;
}

mdb-card-group,
.card-1 {
    width: 300px;
    height: 100px;
}

mdb-card-group,
.card-2 {
    margin-top: 20px;
    width: 300px;
    height: 50px;
}

mdb-card-group,
.card-3 {
    margin-top: 20px;
    width: 300px;
    height: 250px;
}
</style>