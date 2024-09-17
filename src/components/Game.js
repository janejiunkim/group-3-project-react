import React, { useState, useEffect } from "react";
import DetailedGameCard from "./DetailedGameCard";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Game = () => {
  //pull game ID from url
  const pageUrl = window.location.href;
  const _id = pageUrl.match(/game\/([\d]*)/);
  const id = _id[1]; //gives current game ID

  const [gameData, setGames] = useState([]);

  //   let url = process.env.REACT_APP_SERVER_URL + "videogames/trending/"; //process.env.REACT_APP_API is undefined
  let url = "videogames/index/" + id;
  console.log(id);
  console.log("url", url);
  //grab game data from ID
  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
    axios.get(url).then((response) => {
      setGames(response.data.game);
      //   console.log("Testing data", response.data.game);
    });
  }, []);

  console.log("STATE", gameData[0]);

  // this makes sure that the data is loaded before passing it through

  let displayGameCard = gameData[0] ? (
    <DetailedGameCard gameData={gameData[0]} width={15}></DetailedGameCard>
  ) : (
    <p>Loading...</p>
  );

  return <div>{displayGameCard}</div>;
};

export default Game;
