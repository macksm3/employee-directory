import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About The Company!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Some company propaganda here.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
