import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div>
      <div className="developers">
        <h1>~ The Developers ~</h1>
        <div className="developerCards">
          <Row className="mx-0">
            <Card as={Col} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/yFfnNMB.jpg" />
              <Card.Body>
                <Card.Title>Charles Clemmer</Card.Title>
                <Card.Text>
                  A native of St. Louis, Charles moved to San Francisco to
                  obtain a BS in Chemistry and has lived there ever since.
                </Card.Text>
                <Card.Text>Front-end, Back-end, Gitmaster</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card as={Col} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/8KIFKsJ.jpg" />
              <Card.Body>
                <Card.Title>Jane Kim</Card.Title>
                <Card.Text>Front-end</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card as={Col} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Kasai Avery</Card.Title>
                <Card.Text>Front-end</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
