<template>
  <nav class="navbar">
    <div>
      <input
        @input="searchData($event.target.value)"
        type="text"
        placeholder="Search  by name"
      />
      <select @change="changeCategory($event.target.value)">
        <option value="all">All</option>
        <option value="people">Characters</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="species">Species</option>
        <option value="films">Films</option>
        <option value="marked">Marked</option>
      </select>
    </div>
    <div>
      <h1>Galaxy Guide: Star Wars</h1>
    </div>
    <div>
      <button @click="loadOrReloadData()">
        <span v-if="show">Reload Data</span>
        <span v-else>Load Data</span>
      </button>
    </div>
  </nav>
</template>
<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

export default {
  data()
  {
    return{
      show:false,
    }
  },
  methods:{
    loadOrReloadData()
    {
      this.$store.dispatch('getStarWarsData')
    },
    ...mapActions(['changeCategory']),
    ...mapActions(['searchData'])

  },

computed: {
  ...mapGetters(['starWarsData']),
},
mounted(){
     const arrAll = JSON.parse(localStorage.getItem('starWarsData'))
     if(arrAll)
     {
      this.show = true
     }
     else
     {
      this.show = false
     }
},
watch: {
  itemToShow: function(newVal, oldVal) {
     const arrAll = JSON.parse(localStorage.getItem('starWarsData'))
     if(arrAll)
     {
      this.show = true
     }
     else
     {
      this.show = false
     }
  }
}}
</script>

<style lang="scss">
@mixin center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 1700px) {
    > div {
      > h1 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 1100px) {
    > div {
      > h1 {
        font-size: 1rem;
      }
      > input[type="text"] {
        width: 150px;
        font-size: 0.8rem;
      }

      > select {
        width: 100px;
        font-size: 0.8rem;
      }

      > button {
        font-size: 0.8rem;
        width: 150px;
      }

      > button:hover {
        width: 170px;
      }
    }
  }

  @media (max-width: 750px) {
    height: 250px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > div {
      width: 100%;
      > h1 {
        font-size: 1.25rem;
        width: 500px;
        text-align: center;
      }
    }
  }
}
</style>
