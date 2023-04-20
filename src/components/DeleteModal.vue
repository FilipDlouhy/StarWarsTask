<template>
  <div 
    v-if="showModal"
    class="modalOverlay"
    @click="modalToggle({show:false,id:null, event:$event.target.id})" 
  >
    <div id="modal">
      <h1>Do you want to Delete</h1>
      <button @click="deletItem()">
        Delete the item
      </button>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  export default ({
      computed: {
        ...mapGetters(['showModal']),
        ...mapGetters(['idToDelete'])
      },
        methods:{
        ...mapActions(['modalToggle']),
        ...mapActions(['deletItem']),
      }
  })
</script>


<style lang="scss">


@mixin center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modalOverlay
{
    opacity: 0; /* start with opacity 0 */
    animation: fadeIn 0.5s forwards; 
    width: 100vw;
    height: 100vh;
    @include center-flex;
    position: fixed;
    top: 0;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.557);

     >div
     {
        width: 500px;
        height: 400px;
        border-radius: 5px;
        background-color:white ;
        z-index: 4000;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        >button 
        {
          width: 250px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.856);
          color:white;
          @include center-flex;
          font-size: 1.25rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.4s;
          outline: none;
          border:none;
          border-radius: 5px;
          &:hover
          {
            background-color: red;

          }
        }
     }
}
@keyframes fadeIn {
  from {
    opacity: 0; /* start with opacity 0 */
  }
  to {
    opacity: 1; /* end with opacity 1 */
  }
}
</style>