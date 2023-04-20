<template>
  <div class="itemSliderDiv">
    <div>
      <button 
        v-if="$store.state.indexToRender.from !== 0" 
        @click="decreaseIndex()"
      >
        Previous
      </button>
    </div>
    <div>
      <button 
        v-if="$store.state.indexToRender.to !== starWarsData.length" 
        @click="increaseIndex()"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
    ...mapGetters(['starWarsData']),
  },
  mounted() {
    this.$store.dispatch('loadStarWarsDataFromLocalStorage')
  },
  methods: {
    increaseIndex() {
      this.$store.dispatch("renderNextSetOfItems")
    },
    decreaseIndex() {
      this.$store.dispatch("renderPreviousSetOfItems")
    },
  },

}
</script>

<style lang="scss">
@mixin center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.itemSliderDiv {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  > div {
    width: 50%;
    height: 100%;
    @include center-flex;
    
    > button {
      background-color: rgba(0, 0, 0, 0.856);
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      border-radius: 2px;
      width: 250px;
      height: 35px;
      @include center-flex;
      color: white;
      font-size: 1rem;
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
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>