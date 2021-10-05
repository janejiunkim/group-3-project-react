import React from "react";
import AllGames from "./AllGames";

const Games = () => {
  function searchBar() {
    let input = document.getElementById("myInput");
    console.log("test", input.value); //logs current value!
    let col = document.getElementsByClassName("col");
    console.log("col length", col.length);
    console.log("col first", col[0]);

    // card text will be key here, need to access it then filter by it
    for (let i = 0; i < col.length; i++) {}
  }

  return (
    <div>
      <h2>All Games</h2>
      <input
        autoFocus
        type="text"
        id="myInput"
        onKeyUp={(event) => searchBar(event)}
        placeholder="Search for games"
      ></input>
      <input type="text" id="myInput" placeholder="Filter by genre"></input>
      <AllGames />
    </div>
  );
};

export default Games;
