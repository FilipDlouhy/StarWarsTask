<template>
  <div class="container">
    <nav class="navbar">
      <div>
        <input type="text" placeholder="Search ship by name">
                <select>
          <option value="people">All</option>
          <option value="people">Characters</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="films">Films</option>
        </select>
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


    <div class="DataContent">
      <div class="Ship">
        <div>
          <h1>Sentinel-class landing craft</h1>
          <p>Model:Imperial I-class Star Destroyer </p>
        </div>
        <div>
          <p>manufacturer: Kuat Drive Yards</p>
          <p>crew: 47,060 people</p>
          <p>Type: Ship </p>
        </div>
        <div>
          <button>Mark as favorite</button>
          <button>Show More</button>
          <button>Delete</button>
        </div>
      </div>



            <div class="Ship">
        <div>
          <h1>Sand Crawler</h1>
          <p>Model:Digger Crawler</p>
        </div>
        <div>
          <p>manufacturer: Sienar Fleet Systems</p>
          <p>crew: 1 people</p>
          <p>Type: Vehicle </p>
        </div>
        <div>
          <button>Mark as favorite</button>
          <button>Show More</button>
          <button>Delete</button>
        </div>
      </div>


            <div class="Ship">
        <div>
          <h1>Human</h1>
          <p>Classification:mammal</p>
        </div>
        <div>
          <p>manufacturer: Kuat Drive Yards</p>
          <p>Average Height: 180</p>
          <p>Type: Species </p>
        </div>
        <div>
          <button>Mark as favorite</button>
          <button>Show More</button>
          <button>Delete</button>
        </div>
      </div>





            <div class="Ship">
        <div>
          <h1>A New Hope</h1>
          <p>Episode: 4 </p>
        </div>
        <div>
          <p>Director: George Lucas</p>
          <p>Producer: Gary Kurtz, Rick McCallum</p>
          <p>Type: Film  </p>
        </div>
        <div>
          <button>Mark as favorite</button>
          <button>Show More</button>
          <button>Delete</button>
        </div>
      </div>




            <div class="Ship">
        <div>
          <h1>Luke Skywalker</h1>
          <p>Birth year: 19BBY </p>
        </div>
        <div>
          <p>Gender: Male</p>
          <p>Skin color: fair</p>
          <p>Type: Character </p>
        </div>
        <div>
          <button>Mark as favorite</button>
          <button>Show More</button>
          <button>Delete</button>
        </div>
      </div>



            <div class="Ship">
        <div>
          <h1>Tatooine</h1>
          <p>Diameter:10465 Km </p>
        </div>
        <div>
          <p>Terrain: Desert</p>
          <p>Population: 200000 people</p>
          <p>Type: Planet  </p>
        </div>
        <div>
          <button>Mark as favorite</button>
          <button>Show More</button>
          <button>Delete</button>
        </div>
      </div>





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
  justify-content: center;
  flex-wrap: wrap;
}
.container {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
  .DataContent {
    @include flex-ships();
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    padding:  0 100px;

  }

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




.navbar {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.87);
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
      height: 30px;
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
    > select {
      width: 200px;
      height: 30px;
      background-color: #f1f1f1;
      border: none;
      font-size: 1.2rem;
      border-radius: 2px;
      margin-right: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: 0.4s;
    }

  }
}
</style>