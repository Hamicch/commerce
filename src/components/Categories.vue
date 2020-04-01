<<<<<<< HEAD
<template>
        <div class="wrap">
                <div class="list-group">
                        <a href="#!" class="list-group-item list-group-item-action active title">Categories</a>
                        <a href="#!" class="list-group-item list-group-item-action">Clothing</a>
                        <a href="#!" class="list-group-item list-group-item-action">Shoes</a>
                        <a href="#!" class="list-group-item list-group-item-action">Accessories</a>
                        <a href="#!" class="list-group-item list-group-item-action ">Fitness</a>
                        <a href="#!" class="list-group-item list-group-item-action ">Face + Body</a>
                </div>
        </div>
</template>


<script>

export default {
        name: 'Categories',
        props: ['item'],
        
}
</script>

<style scoped>

.wrap {
        margin-top: 30px;
}

.title {
        background-color: black;
        border: 1px solid black;
        font-weight: 400;
}
=======
<template>
        <div class="wrap"> 
                <div class="list-group">
                        <button type="button" class="list-group-item list-group-item-action active">Categories</button>
                <button type="button" class="list-group-item list-group-item-action">{{ item.categoryName }}</button>
                </div>
        </div>
</template>


<script>

export default {
        name: 'Categories',
        props: ['item'],
        
}
</script>

<style scoped>

.wrap {
        margin-top: 30px;
}
.list-group-item active {
        background-color: #343A40;
        color: #fff;
}
>>>>>>> 6b50da0022956462b1c535be2b1e2495eefbc600
</style>