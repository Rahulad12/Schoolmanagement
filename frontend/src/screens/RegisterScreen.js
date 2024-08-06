import React from 'react'
import Register from '../Components/Register'
import {Container } from "react-bootstrap"

const RegisterScreen = () => {
  return (
    
      <Container>
            <h3 className='my-4'> Register Here For Admission </h3>
            <Register registerform/>
      </Container>
   
  )
}

export default RegisterScreen
