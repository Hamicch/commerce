<<<<<<< HEAD
<template>
        <div class="row">
                <div class="card card-cascade narrower rows rows-cols-4" v-for="product in allProducts" :key="product.id">
                        <div class="view view-cascade overlay">
                                <img class="card-img-top"  :src="product.image" alt="Card image cap">
                                <a>
                                        <div class="mask rgba-white-slight" @click="goToProduct(product)"></div>
                                </a>
                        </div>
                        <div class="card-body card-body-cascade">
                                <h4 class="font-weight-bold card-title" @click="goToProduct(product)">{{ product.name }}</h4>
                                <h5 class="grey-text pb-2 pt-1">&#8358; {{ product.price }}</h5>
                                <a class="btn btn-outline-dark btn-md" @click="goToProduct(product)">Buy Now</a>
                        </div>
                </div>
        </div>
</template>


<script>

// import Categories from './Categories'

export default {
        name: 'Products',
        components: {
                // Categories
        },
        // props: ['product'],

        computed: {
            allProducts() {
                    return this.$store.state.products;
            }
            
    },
     methods: {
                goToProduct(product) {
                        this.$store.commit("setSelectedProductValue", product);
                        this.$router.push({ path: "/product-page" });
  }
    } 
}
</script>

<style scoped>

.card-wrap {
         display: inline-block;
        list-style: none;
       
}

.card-cascade{
        width: 160px;
        height: 280px;
        margin: 15px;
        border-radius: 0;
}
.card-img-top {
        
}

.card-title {
        transition: all .3s ease-in-out;
        font-size: 21px;
}

.card-title:hover {
        color: rgb(64, 65, 65);
        cursor: pointer;
}

.grey-text {
        font-size: 17px;
}

.btn {
        border: 1px solid #212121;
        border-radius: 0;
}

.btn:hover {
        background-color: #212121;
        color: #fff;
}
=======
<template>
        <div class="wrap">
                <Categories />
                <div class="card" style="width:400px">
                <img class="card-img-top" :src="product.image" alt="Card image">
                <div class="card-body">
                <h4 class="card-title"><router-link to="/product-page">{{ product.name }}</router-link></h4>
                <p class="card-text">₦{{ product.price }}</p>
                <p class="small text-muted">{{  }}</p>
                <router-link to="/product-page"><a href="#" class="btn btn-outline-dark">Buy Now</a></router-link>
        </div>
</div>
</div>
</template>


<script>

import Categories from './Categories'

export default {
        name: 'Products',
        components: {
                Categories
        },
        props: ['product']
}
</script>

<style scoped>

.wrap{
        display: inline-block;
        margin-top: 30px;
        margin-left: 12px;
}
.card-body{
        border: red;
}
>>>>>>> 6b50da0022956462b1c535be2b1e2495eefbc600
</style>