
<template>
  <div class="DataSet ">
    <div :class="[ marked ? 'yodaDiv' : 'yodaDiv']">
      <img 
        :class="[ marked ? 'yoda' : 'Unshow']" 
        :src="Yoda"
      >
    </div>

    <Films 
      v-if="type === 'films'" 
      :director="director" 
      :episode="episode" 
      :name="name"  
      :producer="producer" 
      :type="type"
    />
        
    <People 
      v-if="type==='people'" 
      :type="type" 
      :birth-year="birthYear"  
      :gender="gender" 
      :skin-colors="skinColors" 
      :name="name"
    />
        
    <Planet 
      v-if="type==='planets'" 
      :type="type" 
      :terrain="terrain" 
      :population="population" 
      :diameter="diameter" 
      :name="name"
    />
        
    <Species 
      v-if="type==='species'" 
      :type="type" 
      :skin-colors="skinColors" 
      :classification="classification" 
      :average-height="averageHeight" 
      :name="name"
    />
        
    <StarshipVehichles 
      v-if="type==='starships'" 
      :type="type" 
      :crew="crew" 
      :manufacturer="manufacturer"  
      :model="model" 
      :name="name"
    />
    
    <StarshipVehichles
      v-if="type==='vehicles'" 
      :type="type" 
      :crew="crew" 
      :manufacturer="manufacturer"  
      :model="model" 
      :name="name"
    />
        
    <div class="buttons">
      <button 
        v-if="marked === false" 
        @click="setFavorite({id:id,marked:true})"
      >
        Mark as favorite
      </button>
      <button 
        v-if="marked === true" 
        @click="setFavorite({id:id,marked:false})"
      >
        Unmark
      </button>
      <button 
        @click="()=>{
          setItemToShow(id)
          goToAbout()
        }"
      >
        Show More
      </button>
      <button   
        @click="modalToggle({show:true,id:id})"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
  import Films  from "./DataCardRenderOptions/DataFilms.vue"
  import Yoda from "../../Yoda.png"
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
        default: ""
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
        default: ""
      },
      episode: {
        type: String,
        default: ""
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
        default: ""
      },
      terrain: {
        type: String,
        default: ''
      },
      population: {
        type: String,
        default: ""
      },
      marked:
      {
        type: Boolean,
        default: false
      },
      id:
      {
        type: String,
        default: ""
      }
    },
    data()
    {
    return {
      Yoda: Yoda
    };
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
  .yodaDiv
  {
    height:60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yoda{
      width: 60px;
      height: 60px;
  }
  .DataSet {
    width: 400px;
    height: 400px;
    margin: 20px;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.897);
    }  

  .buttons
  {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
      > button {
        width: 155px;
        height: 25px;
        margin: 5px;
        font-weight: 700;
        transition: 0.4s;
        cursor: pointer;
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
