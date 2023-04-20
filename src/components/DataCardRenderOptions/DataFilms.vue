<template>
  <div>
    <h1>{{ name }}</h1>
    <div>
      <p class="show">
        Episode: {{ episode }}
      </p>
      <p class="show">
        Director: {{ director }}
      </p>
      <p class="show">
        Producer: {{ producer }}
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
      director: {
        type: String,
        required: true
      },
      producer: {
        type: String,
        required: true
      },
      episode: {
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  div {
    height: 200px;
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
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: 4px;
    }
  }
</style>