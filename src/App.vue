<template>
  <div class="container">


    <div class="itemSliderDiv">
      <button  @click="decreaseIndex()">Previous</button>
      <button  @click="increaseIndex()"> Next</button>
    </div>

    <div class="DataContent">


<div v-for="(item, index) in starWarsData?.slice($store.state.indexToRender.from, $store.state.indexToRender.to)" :key="index">
      <template v-if="item.category === 'people'">
        <DataCard   :marked="item.marked"   :name="item.item.name" :type="item.category" :birthYear="item.item.birth_year"   :gender="item.item.gender"  :skinColors="item.item.skin_color"  />
      </template>
      <template v-else-if="item.category === 'planets'">
        <DataCard   :marked="item.marked"  :name="item.item.name"  :type="item.category" :terrain="item.item.terrain"  :population="item.item.population" :diameter="item.item.diameter" />
      </template>
      <template v-else-if="item.category === 'films'">
        <DataCard  :marked="item.marked" :producer="item.item.producer" :episode="item.item.episode_id" :director="item.item.director" :name="item.item.title" :type="item.category" />
      </template>   
      <template v-else-if="item.category === 'species'">
        <DataCard :marked="item.marked"  :classification="item.item.classification" :averageHeight="item.item.average_height" :name="item.item.name" :skinColors="item.item.skin_colors" :type="item.category"  />
      </template>
      <template v-else-if="item.category === 'vehicles'">
        <DataCard :marked="item.marked"   :name="item.item.name"  :type="item.category"  :model="item.item.model" :manufacturer="item.item.manufacturer"   />
      </template>
      <template v-else-if="item.category === 'starships'">
        <DataCard :marked="item.marked"  :name="item.item.name" :model="item.item.model"  :crew="item.item.crew" :manufacturer="item.item.manufacturer" :type="item.category"   />
      </template>

    </div>

    </div>

  </div>
</template>

<script>
  import DataCard from "./components/DataCard.vue"
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

export default {
  components:{DataCard},
  data()
  {
    return {
    }
  },

  methods:{
    loadOrReloadData()
    {
      this.$store.dispatch('getStarWarsData')
    },
    increaseIndex(){
      this.$store.dispatch("renderNextSetOfItems")
    },
    decreaseIndex(){
      this.$store.dispatch("renderPreviousSetOfItems")
    },
    ...mapActions(['changeCategory']),
    ...mapActions(['searchData'])

  },
mounted() {
  this.$store.dispatch('loadStarWarsDataFromLocalStorage')
}
  ,
computed: {
  ...mapGetters(['starWarsData']),

}
}
</script>



<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

@mixin center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-ships {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.container {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
  .DataContent {
    @include flex-ships();
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    padding:  0 100px;

  }


.navbar {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.87);
  height: 100px;
  display: flex;
  justify-content: space-between;

  > div {
    width: 33%;
    @include center-flex;

    > h1 {
      font-size: 2.5rem;
      letter-spacing: 5px;
      color: white;
    }

    > button {
      background-color: #f1f1f1;
      border: none;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1.2rem;
      border-radius: 2px;
      cursor: pointer;
      transition: 0.4s;
      width: 200px;
      height: 30px;
      font-weight: 500;
    }

    > button:hover {
      width: 220px;
    }

    > input[type="text"] {
      width: 300px;
      height: 30px;
      padding: 0.5rem;
      border-radius: 2px;
      border: 1px solid #ccc;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 400;
      outline: none;
      margin-right: 0.5rem;
      transition: box-shadow 0.2s ease-in-out;
    }

    > input[type="text"]:focus {
      box-shadow: 2px 2px 5px white;
    }
    > select {
      width: 200px;
      height: 30px;
      background-color: #f1f1f1;
      border: none;
      font-size: 1.2rem;
      border-radius: 2px;
      margin-right: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: 0.4s;
    }

  }

}
  .itemSliderDiv
  {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    >button
    {
      background-color: rgba(0, 0, 0, 0.856);
          vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      border-radius: 2px;
      width: 250px;
      height: 35px;
      @include center-flex;
      color:white;
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 3px;
      cursor: pointer;
      transition: 0.4s;

    &:hover {
      -webkit-animation-name: hvr-pop;
      animation-name: hvr-pop;
      -webkit-animation-duration: 0.4s;
      animation-duration: 0.4s;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
    }
    @-webkit-keyframes hvr-pop {
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
@keyframes hvr-pop {
  50% {
    -webkit-transform: scale(1.12);
    transform: scale(1.1);
  }
}
}



  }
</style>