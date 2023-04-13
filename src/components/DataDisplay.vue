<template>
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
</template>

<script>
  import DataCard from "./DataCard.vue"
  import { mapGetters } from 'vuex';

export default {
  components:{DataCard},
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

  .DataContent {
    @include flex-ships();
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    padding:  0 100px;

  }


</style>