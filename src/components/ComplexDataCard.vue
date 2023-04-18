<template>
  <div>
    <div v-if="itemToSHow.length > 0" class="complex">
      <h1>{{ itemToSHow[0] }}</h1>
      <p v-if="typeOfData === 'people'">Birth year: {{ itemToSHow[1] }}</p>
      <p v-if="typeOfData === 'people'">Gender: {{ itemToSHow[2] }}</p>
      <p v-if="typeOfData === 'people'">Skin Color: {{ itemToSHow[3] }}</p>

      <p v-if="typeOfData === 'films'">Episode: {{ itemToSHow[1] }}</p>
      <p v-if="typeOfData === 'films'">Director: {{ itemToSHow[2] }}</p>
      <p v-if="typeOfData === 'films'">Producer: {{ itemToSHow[3] }}</p>

      <p v-if="typeOfData === 'starships'">Model: {{ itemToSHow[1] }}</p>
      <p v-if="typeOfData === 'starships'">Manufacturer: {{ itemToSHow[2] }}</p>
      <p v-if="typeOfData === 'starships'">Crew: {{ itemToSHow[3] }}</p>

      <p v-if="typeOfData === 'planets'">Diameter: {{ itemToSHow[1] }}</p>
      <p v-if="typeOfData === 'planets'">Terrain: {{ itemToSHow[2] }}</p>
      <p v-if="typeOfData === 'planets'">Population: {{ itemToSHow[3] }}</p>

      <p v-if="typeOfData === 'species'">Classification: {{ itemToSHow[1] }}</p>
      <p v-if="typeOfData === 'species'">Skin colors: {{ itemToSHow[2] }}</p>
      <p v-if="typeOfData === 'species'">Average Height: {{ itemToSHow[3] }}</p>

      <button @click="() => {
          setItemToShow(url)
          goToAbout()
        }">Show Details</button>
    </div>
    <div v-else class="complex">
      <p>Loading data...</p>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  export default {
    props: ["type", "url"],
    data() {
      return {
        itemToSHow: [],
        typeOfData: "",
      }
    },
    computed: {
      ...mapGetters(['itemToShow']),
    },
    methods: {
      ...mapActions(['setItemToShow']),
      goToAbout() {
        this.$router.push('/about')
      },
      async getData() {
        const arr = []
        const data = await axios.get(this.url)
        this.item = data.data
        if (this.type.toLowerCase() === "pilots" || this.type.toLowerCase() === "people" || this.type.toLowerCase() === "characters" || this.type.toLowerCase() === "residents") {
          this.typeOfData = "people"
          arr.push(data.data.name)
          arr.push(data.data.birth_year)
          arr.push(data.data.gender)
          arr.push(data.data.skin_color)
        } else if (this.type.toLowerCase() === "films") {
          this.typeOfData = this.type.toLowerCase()
          arr.push(data.data.title)
          arr.push(data.data.episode_id)
          arr.push(data.data.director)
          arr.push(data.data.producer)
        } else if (this.type.toLowerCase() === "vehicles" || this.type.toLowerCase() === "starships") {
          this.typeOfData = "starships"
          arr.push(data.data.name)
          arr.push(data.data.model)
          arr.push(data.data.manufacturer)
          arr.push(data.data.crew)
        } else if (this.type.toLowerCase() === "planets") {
          this.typeOfData = this.type.toLowerCase()
          arr.push(data.data.name)
          arr.push(data.data.diameter)
          arr.push(data.data.terrain)
          arr.push(data.data.population)
        } else if (this.type.toLowerCase() === "species") {
          this.typeOfData = this.type.toLowerCase()
          arr.push(data.data.name)
          arr.push(data.data.classification)
          arr.push(data.data.skin_colors)
          arr.push(data.data.average_height)
        }
        if (arr.includes(undefined)) {
          this.getData()
        } else {
          this.itemToSHow = arr
        }
      }
    },
    mounted() {
      this.itemToShow = []
      this.getData();
    },
    watch: {
      itemToShow: function() {
        this.itemToShow = []
        this.getData()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .complex {
    width: 440px;
    height: 330px;
    background-color: rgba(0, 0, 0, 0.764);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    text-align: center;
    margin: 20px;
    
    > h1 {
      font-size: 2rem;
    }

    > p {
      font-size: 1.30rem;
      font-weight: 500;
    }

    > button {
      width: 200px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.4s;
      font-weight: 600;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
      }
    }
  }
</style>
