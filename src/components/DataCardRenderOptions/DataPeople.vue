<template>
  <div>
    <h1>{{name}}</h1>
    <p v-if="type === 'people'" class="show">Birth year: {{birthYear}}</p>
  </div>
  <div>
    <p v-if="type === 'people'" class="show">Gender: {{gender}}</p>
    <p v-if="type === 'people'" class="show">Skin color: {{skinColors}}</p>
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
      birthYear: {
        type: String,
        required: false
      },
      gender: {
        type: String,
        required: false
      },
      skinColors: {
        type: String,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    color: white;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
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