<template>
  <div>
    <h1>{{ name }}</h1>
    <p class="show">Model: {{ model }} </p>
  </div>
  <div>
    <p class="show">Manufacturer: {{ manufacturer }} </p>
    <p class="show">Crew: {{ crew }} people </p>
    <p>Type: {{ type.charAt(0).toUpperCase() + type.slice(1) }}</p>
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
    model: {
      type: String,
      required: false
    },
    manufacturer: {
      type: String,
      required: false
    },
    crew: {
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
  justify-content: space-around;
  color: white;
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