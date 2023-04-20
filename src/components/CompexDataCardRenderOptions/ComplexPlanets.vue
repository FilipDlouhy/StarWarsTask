<template>
  <div v-if="Object.keys(itemToShow).length > 0">
    <p>Diameter: {{ itemToShow.diameter }}</p>
    <p>Terrain: {{ itemToShow.terrain }}</p>
    <p>Population: {{ itemToShow.population }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      itemToShow: {
        type: Object,
        default: null // set your default value here
      }
    }
  }
</script>

<style lang="scss" scoped>
    p {
      font-size: 1.30rem;
      font-weight: 500;
      margin:  10px 0;
      letter-spacing: 3px;
        }
</style>