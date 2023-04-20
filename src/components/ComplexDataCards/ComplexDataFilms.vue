<template>
  <div>
    <div class="complex">
      <h1>{{ Film.name }}</h1>
      <ComplexFilms
        v-if="Object.keys(Film).length > 0"
        :item-to-show="Film"
      />
      <button
        @click="() => {
          setItemToShow(url);
          goToAbout();
        }"
      >
        Show details
      </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';
  import ComplexFilms from '../CompexDataCardRenderOptions/ComplexFilms.vue';
  import FilmsDTO from "../../DataClasses/FilmsDTO"
  export default {
    components:{ComplexFilms},
    props: {
      type: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        Film: {},
        typeOfData: "",
      }
    },
    computed: {
      ...mapGetters(['itemToShow']),
    },

    watch: {
      itemToShow: function() {
        this.Film = {}
        this.getData()
      }
    },

    mounted() {
      this.Film = {}
      this.getData();
    },

    methods: {
      ...mapActions(['setItemToShow']),
      goToAbout() {
        this.$router.push('/about')
      },
      async getData() {
        const data = await axios.get(this.url)
        this.typeOfData = this.type.toLowerCase()
        let item = new FilmsDTO(
          data.data.title,
          data.data.episode_id,
          data.data.director,
          data.data.producer,
          this.typeOfData
        )
        const allValuesPresent = Object.values(item).every(value => value)
        if (allValuesPresent) {
          this.Film = item

        } else {
          this.getData()
        }
      }
    },

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
    padding: 10px;
    > h1 {
      font-size: 2rem;
      letter-spacing: 3px;
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
