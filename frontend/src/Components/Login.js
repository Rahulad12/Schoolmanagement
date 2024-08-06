import React from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap"; // Importing Form and Button from react-bootstrap
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import { useState } from "react"; // Importing useState from react
import { toast } from "react-toastify"; // Importing toast from react-toastify
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  //submit handler
  const submithandler = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please enter Username and Password");
    }
    else if (password.length < 6){
      toast.error("Password must be atleast 6 characters long");
    }
    else{
      navigate("/");
    }

  };
  return (
    <>
      <Container>
        <Form onSubmit={submithandler}>
          <Form.Group className="mb-3" controlId="Username">
            <Form.Label className="text-muted">User Name</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label className="text-muted">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </Form.Group>
          <Button type="submit"  variant="outline-success">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
