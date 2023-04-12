<template>

      <div class="Ship">
        <div>
                <h1>{{theHihgKing.name}}</h1>
                <p>Episode: 4 </p>
                </div>
                <div>
                <p>Director: George Lucas</p>
                <p>Producer: Gary Kurtz, Rick McCallum</p>
                <p>Type: Film  </p>
                </div>
                <div>
                <button>Mark as favorite</button>
                <button @click="handleButtonClick">Show More</button>
                <button>Delete</button>
                </div>
      </div>
    
</template>


 <script>
 
 export default {
    props:["theHihgKing"]
    ,methods:{

               handleButtonClick() {
                this.$emit('custom-event', { data: 'some data' });
    }
    }
 }
 </script>
 

<style lang="scss" scoped>
.Ship {
  width: 350px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.897);
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  > div {
    width: 100%;
    color: white;
    > p {
      word-spacing: 3px;
      font-weight: 700;
    }
    > button {
      width: 150px;
      height: 25px;
      margin: 5px;
      font-weight: 700;
      transition: 0.4s;
      cursor: pointer;
    }
    > h1 {
      font-size: 1.4rem;
      font-weight: 900;
    }
  }
  > div:nth-child(1),
  > div:nth-child(2) {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  > div:nth-child(3) {
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
