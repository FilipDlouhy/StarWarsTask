
<template>
      <div class="DataSet ">
        <div class="'yoda" >
          <img :class="[ marked ? 'yoda' : 'Unshow']" src="https://res.cloudinary.com/dnhqwtuev/image/upload/v1681821089/blog/icons8-baby-yoda-96_d1r5eh.png">
        </div>

        <Films v-if="type === 'films'" :director="director" :episode="episode" :name="name"  :producer="producer" :type="type" />
        
        <People v-if="type==='people'" :type="type" :birthYear="birthYear"  :gender="gender" :skinColors="skinColors" :name="name"/>
        
        <Planet v-if="type==='planets'" :type="type" :terrain="terrain" :population="population" :diameter="diameter" :name="name"/>
        
        <Species v-if="type==='species'" :type="type" :skinColors="skinColors" :classification="classification" :averageHeight="averageHeight" :name="name"/>
        
        <StarshipVehichles v-if="type==='starships'" :type="type" :crew="crew" :manufacturer="manufacturer"  :model="model" :name="name"/>
        
        <StarshipVehichles v-if="type==='vehicles'" :type="type" :crew="crew" :manufacturer="manufacturer"  :model="model" :name="name"/>
        
        <div>
          <button v-if="marked === false" @click="setFavorite({id:id,marked:true})">Mark as favorite</button>
          <button v-if="marked === true" @click="setFavorite({id:id,marked:false})">Unmark</button>
          <button @click="()=>{
                setItemToShow(id)
                goToAbout()
                }">Show More</button>
          <button   @click="modalToggle({show:true,id:id})">Delete</button>
        </div>
      </div>
</template>

<script>
  import Films  from "./DataCardRenderOptions/DataFilms.vue"
  import People  from "./DataCardRenderOptions/DataPeople.vue"
  import Planet  from "./DataCardRenderOptions/DataPlanet.vue"
  import Species  from "./DataCardRenderOptions/DataSpecies.vue"
  import StarshipVehichles  from "./DataCardRenderOptions/DataStarshipVehichles.vue"
  import { mapActions } from 'vuex';
  export default {
    components:{Films,People,Species,Planet,StarshipVehichles},
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
      },
      id:
      {
        type: String,
        default: null
      }
    },
    methods:{
      ...mapActions(['setFavorite']),
      ...mapActions(['modalToggle']),
      ...mapActions(['setItemToShow']),
          goToAbout() {
        this.$router.push('/about')
      }

    },
  }
</script>

<style lang="scss" scoped>
  .yoda{
      width: 70px;
      height: 70px;
  }
  .DataSet {
    width: 350px;
    height: 400px;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.897);

    > div {
      width: 100%;
      color: white;
      > button {
        width: 155px;
        height: 25px;
        margin: 5px;
        font-weight: 700;
        transition: 0.4s;
        cursor: pointer;
      }
    }
        > div:nth-child(1) {
        width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    > div:nth-child(2) {
      height: 20%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  .show
  {
    display: block;
  }
  .Unshow
  {
    display: none;
  }
</style>
