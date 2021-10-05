import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Scores from "./Scores";

const DetailedGameCard = (props) => {
  let trailerLink;

  if (props.gameData.videos[0]) {
    let videoId = props.gameData.videos[0].video_id;
    trailerLink = "https://www.youtube.com/embed/" + videoId;
  }

  return (
    <div className="card">
      <Row>
        <div>
          <h1>{props.gameData.name}</h1>
          {/* want to remove border eventually */}
        </div>
      </Row>
      <Row>
        <Col xs={4}>
          <img
            src={"https://" + props.gameData.cover.url}
            className="card-img-top"
            alt="..."
            style={{ maxHeight: "400px" }}
          />
        </Col>
        <Col>
          <Row>
            <div>
              <h4>Summary:</h4>
              <p>{props.gameData.summary}</p>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <div style={{ textAlign: "center" }}>
            <p>Our Rating: TBD</p>
          </div>
        </Col>
        <Col>
          <p class="score-box">
            <Scores gameData={props.gameData} />
          </p>
        </Col>
      </Row>
      <Row className="trailers">
        <iframe
          width="420"
          height="600"
          src={trailerLink}
          allowfullscreen="allowfullscreen"
          title="youtube video"
        >
          Watch the Trailer!
        </iframe>
      </Row>
    </div>
  );
};

export default DetailedGameCard;
