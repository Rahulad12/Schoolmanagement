import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <ToastContainer />
    </>
  );
};
export default App;
