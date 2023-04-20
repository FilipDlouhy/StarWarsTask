<template>
  <div>
    <div class="complex">
      <h1>{{ Human.name }}</h1>
      <ComplexPeople
        v-if="Object.keys(Human).length > 0"
        :item-to-show="Human"
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
  import { mapActions, mapGetters } from 'vuex';
  import ComplexPeople from '../CompexDataCardRenderOptions/ComplexPeople.vue';
  import PeopleDTO from '../../DataClasses/PeopleDTO';

  export default {
    components: { ComplexPeople },
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
        Human: {},
        typeOfData: '',
      };
    },
    computed: {
      ...mapGetters(['itemToShow']),
    },
    watch: {
      itemToShow() {
        this.Human = {};
        this.getData();
      },
    },
    mounted() {
      this.Human = {};
      this.getData();
    },
    methods: {
      ...mapActions(['setItemToShow']),
      goToAbout() {
        this.$router.push('/about');
      },
      async getData() {
        const data = await axios.get(this.url);
        this.typeOfData = 'people';
        let item = new PeopleDTO(
          data.data.name,
          data.data.birth_year,
          data.data.gender,
          data.data.skin_color,
          this.typeOfData
        )
        const allValuesPresent = Object.values(item).every((value) => value);
        if (allValuesPresent) {
          this.Human = item;
          console.log(item);
        } else {
          this.getData();
        }
      },
    },


  };
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
