<template>
  <div class="container">
    <Navbar />
    <IncreaseDecreaseButtons />

    <div 
      v-if="starWarsData.length > 0 "
    >
      <DataDisplay />
    </div>
    <div  
      v-else
    >
      <h1 class="heading">
        No Data
      </h1>
    </div>
    <Modal />
  </div>
</template>

<script>
  import Navbar  from "../components/NavigationMenu.vue"
  import Modal from "../components/DeleteModal.vue"
  import DataDisplay from "../components/DataDisplay.vue"
  import IncreaseDecreaseButtons from "../components/IncreaseDecreaseButtons.vue"
  import { mapGetters } from 'vuex';

export default {
    components:{Modal,Navbar,IncreaseDecreaseButtons,DataDisplay},

  computed: {
    ...mapGetters(['starWarsData']),
  }
}
</script>


<style lang="scss">
@font-face {
  font-family: 'Star Jedi';
  src: url('../../Starjedi.ttf') format('truetype');
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Star Jedi', sans-serif;
  }
  
  .container {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  .heading{
    text-align: center;
    margin-top: 100px;
    font-family: 'Star Wars', sans-serif;
  }
 
</style>