import React from "react";

import { Card, Button, Row, Col, Container } from "react-bootstrap";
const Teachers = ({ teacher }) => {
  return (
    <>
      <Container>
        <Card className="my-3 p-3 rounded">
          <Card.Img src={teacher.image} variant="top" />
          <Card.Body>
            <Card.Title as="div">
              <strong>{teacher.name}</strong>
            </Card.Title>
            <Card.Text as="div">
              <div className="my-3">{teacher.subject}</div>
            </Card.Text>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Teachers;
