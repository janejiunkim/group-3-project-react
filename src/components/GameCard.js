import React from "react";

const GameCard = (props) => {
  return (
    <div className="card" style={{ width: props.width + "rem" }}>
      <img
        src={"https://" + props.gameData.cover.url}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{props.gameData.name}</p>
      </div>
    </div>
  );
};

export default GameCard;
