import React from 'react'
import {Navbar,Container,Button,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export const NavBar1 = () => {

    const navigate = useNavigate()

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto" style={{gap:10}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button onClick={()=>{navigate('/SignUp')}}>SignUp</Button>
            <Button onClick={()=>{navigate('/LogIn')}}>LogIn</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
