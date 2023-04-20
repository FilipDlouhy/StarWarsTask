<template>
  <div>
    <h1>{{ name }}</h1>
    <div>
      <p class="show">
        Birth year: {{ birthYear }}
      </p>
      <p class="show">
        Gender: {{ gender }}
      </p>
      <p class="show">
        Skin color: {{ skinColors }}
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
      birthYear: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      skinColors: {
        type: String,
        required: true
      }
    }
    ,
  }
</script>

<style lang="scss" scoped>
  div {
    color: white;
    height: 200px;
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
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: 4px;
    }
  }
</style>