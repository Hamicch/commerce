<template>
        <div class="row">
                <!-- <div class="card" style="width:400px" v-for="product in allProducts" :key="product.id">
                <img class="card-img-top" :src="product.image" alt="Card image">
                <div class="card-body">
                <h4 class="card-title" @click="goToProduct(product)"><a>{{ product.name }}</a></h4>
                <p class="card-text">&#8358; {{ product.price }}</p>
                <a href="#" class="btn btn-dark" @click="goToProduct(product)">Buy Now</a>
        </div>
</div> -->
<div class="card card-cascade narrower rows rows-cols-4" v-for="product in allProducts" :key="product.id">

  <!-- Card image -->
  <div class="view view-cascade overlay">
    <img class="card-img-top"  :src="product.image"
      alt="Card image cap">
    <a>
      <div class="mask rgba-white-slight" @click="goToProduct(product)"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body card-body-cascade">

    <!-- Label --> 
   <h4 class="font-weight-bold card-title" @click="goToProduct(product)">{{ product.name }}</h4>
    <!-- Title -->
    <h5 class="grey-text pb-2 pt-1">&#8358; {{ product.price }}</h5>
    <!-- Text -->
    <!-- Button -->
    <a class="btn btn-outline-dark" @click="goToProduct(product)">Buy Now</a>

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

/* .wrap {
        display: inline-block;
        list-style: none;
        margin-top: 40px;
        margin-left: 0px;
} */
.card-wrap {
         display: inline-block;
        list-style: none;
       
}

.card-cascade{
        width: 200px;
        height: 350px;
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
</style>