<template>
  <div v-if="Object.keys(itemToShow).length > 0">
    <p>Birth year: {{ itemToShow.birthYear }}</p>
    <p>Gender: {{ itemToShow.gender }}</p>
    <p>Skin Color: {{ itemToShow.skinColor }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      itemToShow: {
        type: Object,
        default: null
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