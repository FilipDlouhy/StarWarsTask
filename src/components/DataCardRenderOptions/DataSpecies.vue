<template>
  <div>
    <h1>{{ name }}</h1>
    <p v-if="type === 'species'" class="show">Classification: {{ classification }}</p>
  </div>
  <div>
    <p v-if="type === 'species'" class="show">Skin colors: {{ skinColors }}</p>
    <p v-if="type === 'species'" class="show">Average Height: {{ averageHeight }} cm</p>
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
    classification: {
      type: String,
      required: false
    },
    skinColors: {
      type: String,
      required: false
    },
    averageHeight: {
      type: Number,
      required: false
    }
  }
};
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