import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import GameCard from "./GameCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Trending = () => {
  const [trendingGames, setGames] = useState([]);

  //   let url = process.env.REACT_APP_SERVER_URL + "videogames/trending/"; //process.env.REACT_APP_API is undefined
  let url = "videogames/trending/";

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
    axios.get(url).then((response) => {
      setGames(response.data.game);
      console.log("Testing trending", response.data.game);
    });
  }, []);

  console.log("STATE", trendingGames);

  // this makes sure that the data is loaded before passing it through
  function trendingList(n) {
    let gameArr = [];
    for (let i = 0; i < n; i++) {
      gameArr.push(
        <Col>
          <GameCard gameData={trendingGames[i]}></GameCard>
        </Col>
      );
    }
    return gameArr;
  }

  let displayTrendingList = trendingGames.length ? (
    trendingList(6)
  ) : (
    <h2>Loading...</h2>
  );

  return (
    <div className="trending">
      <Row className="mx-0">{displayTrendingList}</Row>
    </div>
  );
};

export default Trending;
