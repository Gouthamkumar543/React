import React from 'react'
import {Navbar, Container, Nav, Button, Badge} from "react-bootstrap"
import "./Navbar.css"
import { GrCart } from "react-icons/gr";
import { IoFastFoodSharp } from "react-icons/io5";

export const Navbar1 = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{fontSize:"25px"}} href='/home'>Foodies <IoFastFoodSharp style={{color:"white"}} size={25}/> </Navbar.Brand>
          <Nav className='NavLinks'>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Button variant="primary">Login</Button>
            <Button variant="primary">SingUp</Button>
            <div>
                <GrCart style={{ color: "white" }} size={25} />
                <Badge bg="secondary" style={{position:"relative",top:-10}}>0</Badge>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
