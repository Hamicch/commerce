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
</style>