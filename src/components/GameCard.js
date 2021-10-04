import React from "react";
import { NavLink, Link } from "react-router-dom";

const GameCard = (props) => {
  return (
    <div className="card" style={{ width: props.width + "rem" }}>
      <Link
        to={{
          pathname: "/game/" + props.gameData.id,
        }}
        style={{ color: "black", textDecoration: "none" }}
      >
        <img
          src={"https://" + props.gameData.cover.url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">{props.gameData.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
