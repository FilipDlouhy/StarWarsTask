import { createStore } from 'vuex'

export default createStore({
  state: {
    starWarsData: [],
  },
  mutations: {
    SET_STAR_WARS_DATA(state, data) {
      state.starWarsData = data;
    },

  },
  actions: {
    loadStarWarsDataFromLocalStorage({ commit }) {
      const starWarsData = localStorage.getItem('starWarsData');
      if (starWarsData) {
        console.log(JSON.parse(starWarsData))
        commit('SET_STAR_WARS_DATA', JSON.parse(starWarsData));
      }
    },
    async getStarWarsData({ commit }) {
      localStorage.clear()
      let results = []
      // check if data is not already in local storage
   
        // store the fetched data to local storage
        let url = 'https://swapi.dev/api/'
        const response = await fetch(url)
        const data = await response.json()
        await Promise.all(Object.keys(data).map(async (category) => {
          let categoryUrl = `https://swapi.dev/api/${category}/`
          while (categoryUrl) {
            const categoryData = []
            const response = await fetch(categoryUrl)
            const data = await response.json()
            data.results.map((item)=>{
              categoryData.push({category:category,item:item})
            })
  
            results.push(...categoryData)
            categoryUrl = data.next
          }
        }))
        localStorage.setItem('starWarsData', JSON.stringify(results))


      commit('SET_STAR_WARS_DATA', results)
      console	.log(results)
    }
  },
  getters: {
    starWarsData: (state) => state.starWarsData,
  },
});