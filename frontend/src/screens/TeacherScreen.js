import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Teacher from "../Teachers";
import Teachers from "../Components/Teachers";
import {useGetTeacherQuery} from '../sclices/Teacherapisclice';
const TeacherScreen = () => {
  const [Teacher, { isloading, isempty, isError }] = useGetTeacherQuery();

  const isAdmin = true;
  
  return (
    <div>
      <Container>
        {isAdmin ? (
          <Button className="btn btn-success my-3 " as={Link} to="/addteacher">
            Add Teacher
          </Button>
        ) : null}
        <Row>
          {Teacher.map((teachers) => {
            return (
              <Col key={teachers.id} sm={6} md={6} lg={4} xl={3}>
                <Teachers teacher={teachers} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TeacherScreen;
