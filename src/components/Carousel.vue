<template>
<carousel :per-page="1"  :mouse-drag="false">
    <slide v-for="image in caro"  :key="image.carouselId">
      <img :src="image.carouselImage"/>
    </slide>
  </carousel>
</template>

<script>


export default {
       props: ['caro']
}
</script>

<style  scoped>

</style>