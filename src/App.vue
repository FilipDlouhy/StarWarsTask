<template>
  <div class="container">
  <Navbar/>
  <IncreaseDecreaseButtons/>


    <DataDisplay/>

  </div>
</template>

<script>
  import Navbar  from "./components/Navbar.vue"
  import DataCard from "./components/DataCard.vue"
  import DataDisplay from "./components/DataDisplay.vue"
  import IncreaseDecreaseButtons from "./components/IncreaseDecreaseButtons.vue"

export default {
  components:{DataCard,Navbar,IncreaseDecreaseButtons,DataDisplay}

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
 
</style>