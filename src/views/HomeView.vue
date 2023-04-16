<template>
  <div class="container">
  <Navbar/>
  <IncreaseDecreaseButtons/>

  <div  v-if="starWarsData.length > 0 ">
    <DataDisplay/>

  </div>
  <div  v-else>
    <h1 class="heading">No Data</h1>
  </div>
  <Modal/>
  </div>
</template>

<script>
  import Navbar  from "../components/Navbar.vue"
  import DataCard from "../components/DataCard.vue"
  import Modal from "../components/Modal.vue"
  import DataDisplay from "../components/DataDisplay.vue"
  import IncreaseDecreaseButtons from "../components/IncreaseDecreaseButtons.vue"
  import { mapGetters } from 'vuex';

export default {
    components:{Modal,DataCard,Navbar,IncreaseDecreaseButtons,DataDisplay},

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
.container {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;


}

   .heading{
     text-align: center;
     margin-top: 100px;
    }
 
</style>