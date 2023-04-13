<template>

      <div :class="['DataSet', marked ? 'Marked' : 'Unmarked']">
        <div>
                <h1>{{name}}</h1>
                <p v-if="type === 'starships'" class="show">Model: {{model}} </p>

                <p v-if="type === 'vehicles'" class="show">Model: {{model}} </p>

                <p v-if="type === 'species'" class="show">Model: {{classification}} </p>

                <p v-if="type === 'films'" class="show">Episode: {{episode}} </p>

                <p v-if="type === 'planets'" class="show">Diameter: {{diameter}} KM </p>

                <p v-if="type === 'people'" class="show">Birth year: {{birthYear}} KM </p>
                </div>
                <div>
                  <p v-if="type === 'starships'" class="show">Manufacturer: {{manufacturer}} </p>
                  <p v-if="type === 'starships'" class="show">Crew: {{crew}} people </p>

                  <p v-if="type === 'vehicles'" class="show">Manufacturer: {{manufacturer}} </p>
                  <p v-if="type === 'vehicles'" class="show">Crew: {{crew}} people </p>

                  <p v-if="type === 'species'" class="show">Skin colors: {{skinColors}} </p>
                  <p v-if="type === 'species'" class="show">Average Height: {{averageHeight}} people </p>

                  <p v-if="type === 'films'" class="show">Director: {{director}} </p>
                  <p v-if="type === 'films'" class="show">Producer: {{producer}}  </p>

                  <p v-if="type === 'planets'" class="show">Terrain: {{terrain}} </p>
                  <p v-if="type === 'planets'" class="show">Population: {{population}} people </p>

                  <p v-if="type === 'people'" class="show">Gender: {{gender}} </p>
                  <p v-if="type === 'people'" class="show">Skin color: {{skinColors}} people </p>

                <p>Type:  {{ type.charAt(0).toUpperCase() + type.slice(1) }}  </p>
                </div>
                <div>
                <button>Mark as favorite</button>
                <button >Show More</button>
                <button>Delete</button>
                </div>
      </div>

      
    
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    },
    manufacturer: {
      type: String,
      default: ''
    },
    crew: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: ''
    },
    classification: {
      type: String,
      default: ''
    },
    skinColors: {
      type: String,
      default: ''
    },
    averageHeight: {
      type: String,
      default: null
    },
    episode: {
      type: String,
      default: null
    },
    director: {
      type: String,
      default: ''
    },
    producer: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: ''
    },
    birthYear: {
      type: String,
      default: ''
    },
    diameter: {
      type: String,
      default: null
    },
    terrain: {
      type: String,
      default: ''
    },
    population: {
      type: String,
      default: null
    },
    marked:
    {
      type: Boolean,
      default: null
    }
  }
}
</script>
 

<style lang="scss" scoped>
.DataSet {
  width: 350px;
  height: 350px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  > div {
    width: 100%;
    color: white;
    > p {
      word-spacing: 3px;
      font-weight: 700;
    }
    > button {
      width: 150px;
      height: 25px;
      margin: 5px;
      font-weight: 700;
      transition: 0.4s;
      cursor: pointer;
    }
    > h1 {
      font-size: 1.4rem;
      font-weight: 900;
    }
  }
  > div:nth-child(1),
  > div:nth-child(2) {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  > div:nth-child(3) {
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}
.Unmarked
{
  background-color: rgba(0, 0, 0, 0.897);
}
.Marked
{
  background-color: rgba(23, 8, 235, 0.897);
}
.show
{
  display: block;
}
</style>
