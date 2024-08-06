import { set } from "mongoose";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Form, Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    dateofbirth: "",
    age: "",
    grade: "",
    fathername: "",
    mothername: "",
    phonenumber: "",
    message: "",
  });

  const [ShowModal, setshowModal] = useState(false);
  const navigate = useNavigate();

  // Calculate age from date of birth
  const calculateage = (dob) => {
    const birthdate = new Date(dob);
    const difference = Date.now() - birthdate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  // Set age from date of birth,calling calculateage function
  formData.age = calculateage(formData.dateofbirth);

  // Handle form data change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      address,
      dateofbirth,
      grade,
      age,
      fathername,
      mothername,
      phonenumber,
      message,
    } = formData;

    if (
      !firstname ||
      !lastname ||
      !address ||
      !dateofbirth ||
      !grade ||
      !fathername ||
      !mothername ||
      !phonenumber
    ) {
      toast.error("Every field should be filled");
    } else if (phonenumber.length !== 10) {
      toast.error("Phone number should be 10 digit");
    } else {
      setshowModal(true);
      
    }
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Row className="my-3">
          <Col md={6}>
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dateofbirth">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                value={formData.dateofbirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="grade">
              <Form.Label>Grade</Form.Label>
              <Form.Select
                value={formData.grade}
                onChange={handleChange}
                required
              >
                <option>Enter a grade you want to take Admission</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="fathername">
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Father Name"
                value={formData.fathername}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mothername">
              <Form.Label>Mother Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mother Name"
                value={formData.mothername}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phonenumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="0000000000"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a Message Here"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-3" controlId="button">
            <Button type="submit" variant="outline-success">
              Register
            </Button>
          </Form.Group>
        </Row>
      </Form>

      <Modal show={ShowModal} onHide={() => setshowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Name : {formData.firstname} {formData.lastname} <br />
          Address : {formData.address} <br />
          Date of Birth : {formData.dateofbirth} <br />
          Age : {formData.age} <br />
          Grade : {formData.grade} <br />
          Father Name : {formData.fathername} <br />
          Mother Name : {formData.mothername} <br />
          Phone Number : {formData.phonenumber} <br />
          Message : {formData.message} <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              toast.success("Successfully Register ") && localStorage.setItem("formData", JSON.stringify(formData)) && console.log(formData)
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Register;
