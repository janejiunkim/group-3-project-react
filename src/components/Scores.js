import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Scores = (props) => {
  let gameData = props.gameData;
  let scoreArr = [];
  console.log(props.gameData);

  function fillScoreArr(gameData) {
    if (gameData.steamReview) {
      makeCol("Steam: " + Math.round(gameData.steamReview) + "%");
    }
    if (gameData.polygonReview) {
      makeCol("Polygon: " + gameData.polygonReview);
    }
    if (gameData.metacriticReview) {
      makeCol("Metacritic: " + gameData.metacriticReview);
    }
    if (gameData.ignReview) {
      makeCol("IGN: " + gameData.ignReview);
    }
    if (gameData.gamespotReview) {
      makeCol("Gamespot: " + gameData.gamespotReview);
    }
  }

  function makeCol(data) {
    scoreArr.unshift(<Col> {data} </Col>);
  }

  fillScoreArr(gameData);

  return (
    <div>
      <Row>{scoreArr}</Row>
    </div>
  );
};

export default Scores;
