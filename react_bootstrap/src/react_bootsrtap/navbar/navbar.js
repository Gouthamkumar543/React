import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from 'react-bootstrap/esm/Button'

export const Navbar1 = () => {
  return (
    <div>
      <Navbar bg='success' expand="sm">
        <Navbar.Brand>Goutham</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className="d-flex justify-content-between">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Help</Nav.Link>
          </Nav>
          <div className="ml-auto">
            <Button className="mr-2">Login</Button>
            <Button className="mr-2">SignUp</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
