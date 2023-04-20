<template>
  <div>
    <h1>{{ name }}</h1>
    <div>
      <p class="show">
        Diameter: {{ diameter }}
      </p>
      <p class="show">
        Terrain: {{ terrain }}
      </p>
      <p class="show">
        Population: {{ population }}
      </p>
    </div>
    <div>
      <p>Type: {{ type.charAt(0).toUpperCase() + type.slice(1) }}</p>
    </div>
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
        required: true
      },
      terrain: {
        type: String,
        required: true
      },
      population: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    height: 200px;
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
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: 4px;
    }
  }
</style>