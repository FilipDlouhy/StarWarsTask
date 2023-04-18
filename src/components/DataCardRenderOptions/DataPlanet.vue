<template>
  <div>
    <h1>{{ name }}</h1>
    <p v-if="type === 'planets'" class="show">Diameter: {{ diameter }} KM </p>
  </div>
  <div>
    <p v-if="type === 'planets'" class="show">Terrain: {{ terrain }} </p>
    <p v-if="type === 'planets'" class="show">Population: {{ population }} people </p>
    <p>Type: {{ type.charAt(0).toUpperCase() + type.slice(1) }}  </p>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      diameter: {
        type: Number,
        required: false
      },
      terrain: {
        type: String,
        required: false
      },
      population: {
        type: Number,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    justify-content: space-around;
    > p {
      word-spacing: 5px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 4px;
    }
    > h1 {
      font-size: 1.25rem;
      font-weight: 900;
      letter-spacing: 4px;
    }
  }
</style>