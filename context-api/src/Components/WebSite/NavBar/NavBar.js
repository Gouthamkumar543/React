import React from 'react'
import {Navbar, Container, Nav, Button, Badge} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

export const Navbar1 = () => {

    const navigate = useNavigate()

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{fontSize:"25px"}} href='/home'>Foodies</Navbar.Brand>
          <Nav className='NavLinks'>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Button onClick={()=>navigate("/cart")}>Cart<Badge bg="secondary" style={{position:"relative",top:-10}}>0</Badge></Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
