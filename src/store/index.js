import uuid from 'react-uuid';
import { createStore } from 'vuex'

export default createStore({
  state: {
    starWarsData: [],
    indexToRender:
    {
      from:0,
      to:30
    },
    categoryToRender:"all"
  },
  mutations: {
    SET_STAR_WARS_DATA(state, data) {
      state.starWarsData = data;
    },
    SET_INDEX_TO_RENDER(state, data) {
      state.indexToRender.from = data.from;
      state.indexToRender.to = data.to;
      console.log(state.indexToRender)
      
    },
    SET_CATEGORY_TO_RENDER(state, data) {
      state.categoryToRender = data;
    }
  },
  actions: {
    loadStarWarsDataFromLocalStorage({ commit }) {
      const starWarsData = localStorage.getItem('starWarsData');
      if (starWarsData) {
        const parsedData = JSON.parse(starWarsData);
        const shuffledData = parsedData.sort(() => Math.random() - 0.5); // Shuffle the array
        console.log(shuffledData);
        commit('SET_STAR_WARS_DATA', shuffledData);
      }
    },
    async getStarWarsData({ commit }) {
      localStorage.clear()
      let results = []
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
              const id = uuid()
              categoryData.push({category:category,item:item,marked:false,id:id})

            })
            results.push(...categoryData)
            categoryUrl = data.next
          }
        }))

        for (let i = results.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          const temp = results[i]
          results[i] = results[j]
          results[j] = temp
        }
        localStorage.setItem('starWarsData', JSON.stringify(results))


      commit('SET_STAR_WARS_DATA', results)
    },

    renderNextSetOfItems({ commit })
    {
      const length = this.state.starWarsData.length;
      if(this.state.indexToRender.to + 30 < length)
      {
        const newIndex = 
        {
          from:this.state.indexToRender.to,
          to:this.state.indexToRender.to + 30
        }
        commit('SET_INDEX_TO_RENDER',newIndex);
      }
      else if(this.state.indexToRender.from + 30 > length)
      {
        const newIndex = 
        {
          from:this.state.indexToRender.from,
          to:this.state.indexToRender.to
        }
        commit('SET_INDEX_TO_RENDER',newIndex);
      }
      else if(this.state.indexToRender.from + (this.state.indexToRender.to - this.state.indexToRender.from) === length)
      {
        const newIndex = 
        {
          from:this.state.indexToRender.from,
          to:this.state.indexToRender.to
        }
        commit('SET_INDEX_TO_RENDER',newIndex);
      }
      else
      {
        const newIndex = 
        {
          from:this.state.indexToRender.to,
          to: this.state.indexToRender.to+ ((this.state.indexToRender.to - length) * -1) 
        }
        commit('SET_INDEX_TO_RENDER',newIndex)
      }
    }
,
    renderPreviousSetOfItems({ commit })
    {
      if(this.state.indexToRender.from - 30 > 0)
      {
        const newIndex = 
        {
          from:this.state.indexToRender.from - 30,
          to: this.state.indexToRender.from
        }
        commit('SET_INDEX_TO_RENDER',newIndex);
      }
      else if(this.state.indexToRender.from === 0)
      {
        const newIndex = 
        {
          from:this.state.indexToRender.from,
          to:this.state.indexToRender.to
        }
        commit('SET_INDEX_TO_RENDER',newIndex);
      }
      else
      {
        const newIndex = 
        {
          from:0,
          to:this.state.indexToRender.from
        }
        commit('SET_INDEX_TO_RENDER',newIndex)
      }
    },
    changeCategory({commit},category)
    {
      const newIdnex = {
        from:0,
        to:30
      }
      const arr = []
      const starWarsData = JSON.parse(localStorage.getItem('starWarsData'))
      console.log(starWarsData.length)
      if(category !== "all")
      {
        starWarsData.map((data)=>{
          if(data.category === category)
          {
            arr.push(data)
          }
        })
      }
      else
      {
        starWarsData.map((data)=>{
            arr.push(data)
        })
      }

      commit('SET_INDEX_TO_RENDER', newIdnex)
      commit('SET_CATEGORY_TO_RENDER', category)
      commit('SET_STAR_WARS_DATA', arr)
    },
    searchData({commit}, searchText) {
      const arr = []
      const starWarsData = JSON.parse(localStorage.getItem('starWarsData'))
      const lowerCaseSearchTerm = searchText.toLowerCase();
      if (this.state.categoryToRender !== "all") {
        starWarsData.map((data) => {
          if (data.category === this.state.categoryToRender && data.item && data.item.name && data.item.name.toLowerCase().includes(lowerCaseSearchTerm)) {
            arr.push(data)
          }
        })
      }
      else if(searchText.length === 0 )
      {
        starWarsData.map((data) => {
            arr.push(data)
        })
      }
      else {
        starWarsData.map((data) => {
          if (data.item && data.item.name && data.item.name.toLowerCase().includes(lowerCaseSearchTerm)) {
            arr.push(data)
          }
        })
      }
      commit('SET_STAR_WARS_DATA', arr)
    },
    setAsFavorite({commit},id)
    {
      const arr = []
      const arrAll = JSON.parse(localStorage.getItem('starWarsData'))
      const arrAllNew = []
      this.state.starWarsData.map((data)=>{
        if(data.id === id)
        {
          arr.push({category:data.category,item:data.item,marked:true,id:data.id})
        }
        else
        {
          arr.push(data)
        }
      })
      console.log(arr)


      arrAll.map((data)=>{
        if(data.id === id)
        {
          arrAllNew.push({category:data.category,item:data.item,marked:true,id:data.id})
        }
        else
        {
          arrAllNew.push(data)
        }
      })
      localStorage.setItem('starWarsData', JSON.stringify(arr))
      commit('SET_STAR_WARS_DATA', arr)
    },
    removeFromFavorites({commit},id)
    {
      const arr = []
      const arrAll = JSON.parse(localStorage.getItem('starWarsData'))
      const arrAllNew = []
      this.state.starWarsData.map((data)=>{
        if(data.id === id)
        {
          arr.push({category:data.category,item:data.item,marked:false,id:data.id})
        }
        else
        {
          arr.push(data)
        }
      })
      arrAll.map((data)=>{
        if(data.id === id)
        {
          arrAllNew.push({category:data.category,item:data.item,marked:false,id:data.id})
        }
        else
        {
          arrAllNew.push(data)
        }
      })
      console.log(arr)
      localStorage.setItem('starWarsData', JSON.stringify(arr))

      commit('SET_STAR_WARS_DATA', arr)
    }


  },
  getters: {
    starWarsData: (state) => state.starWarsData,
    indexToRender: (state) => state.indexToRender,
  },
});