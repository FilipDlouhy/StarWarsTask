<template>
  <div v-if="Object.keys(itemToShow).length > 0">
    <p>Model: {{ itemToShow.model }}</p>
    <p>Manufacturer: {{ itemToShow.manufacturer }}</p>
    <p>Crew: {{ itemToShow.crew }}</p>
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
    @media (max-width:500px) {
      p{
        font-size: 0.8rem;
      }
    }
</style>