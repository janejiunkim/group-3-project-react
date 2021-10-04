import React from "react";
import AllGames from "./AllGames";

const Games = () => {
  return (
    <div>
      <h2>All Games</h2>
      <input
        autofocus
        type="text"
        id="myInput"
        onkeyup="searchBar()"
        placeholder="Search for games"
      ></input>
      <input
        autofocus
        type="text"
        id="myInput"
        onkeyup="searchBar()"
        placeholder="Filter by genre"
      ></input>
      <AllGames />
    </div>
  );
};

export default Games;
