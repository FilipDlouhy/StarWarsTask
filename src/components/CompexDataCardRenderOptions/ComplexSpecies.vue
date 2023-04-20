<template>
  <div>
    <p>Classification: {{ itemToShow.classification }}</p>
    <p>Skin colors: {{ itemToShow.skinColor }}</p>
    <p>Average Height: {{ itemToShow.averageHeight }}</p>
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