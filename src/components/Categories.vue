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
</style>