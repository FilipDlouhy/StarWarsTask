<template>
  <div class="container">
    <nav class="navbar">
      <div>
        <input type="text" placeholder="Search ship by name">
      </div>
      <div>
        <h1>The Star Wars Hangar</h1>
      </div>
      <div>
        <button>
          Load Ships
        </button>
      </div>
    </nav>


    <div class="ShipsContent">
      <!-- content div here -->
    </div>

  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

@mixin center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-ships {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.container {
  width: 100vw;
  height: 100vh;
}
  .ShipsContent {
    @include flex-ships();
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;

    >div
    {
      width: 300px;
      height:  300px;
      
    }
  }

.navbar {
  width: 100%;
  background-color: black;
  height: 100px;
  display: flex;
  justify-content: space-between;

  > div {
    width: 33%;
    @include center-flex;

    > h1 {
      font-size: 2.5rem;
      letter-spacing: 5px;
      color: white;
    }

    > button {
      background-color: #f1f1f1;
      border: none;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1.2rem;
      border-radius: 2px;
      cursor: pointer;
      transition: 0.4s;
      width: 200px;
      height: 30px;
      font-weight: 500;
    }

    > button:hover {
      width: 220px;
    }

    > input[type="text"] {
      width: 300px;
      height: 35px;
      padding: 0.5rem;
      border-radius: 2px;
      border: 1px solid #ccc;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 400;
      outline: none;
      margin-right: 0.5rem;
      transition: box-shadow 0.2s ease-in-out;
    }

    > input[type="text"]:focus {
      box-shadow: 2px 2px 5px white;
    }
  }
}
</style>