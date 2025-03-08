import React, { useEffect, useState } from 'react'
import {Navbar,Container,Nav, Button, Badge} from "react-bootstrap"
import { FaOpencart } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Navbar1 = () => {

  const navigate = useNavigate()

  const [cartData,setCartData] = useState([])
  // const [badgeUpdate,setBadgeUpdate] = useState(false)

  useEffect(()=>{
    axios.get("http://localhost:5000/cartitems")
    .then(res=>{
      // console.log(res.data)
      setCartData(res.data)
    }).catch(err=>{console.log(err)})
  },[])

  // console.log(cartData);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand='md'>
        <Container>
          <Navbar.Brand href=""><SiFoodpanda size={25}/> <strong>Recipies</strong></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav style={{ gap: "10px"}}>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/recipies">Recipies</Nav.Link>
              <Button onClick={()=>{navigate("/addrecipie")}}>AddNewRecipie</Button>
              <Button>LogIn</Button>
              <Button>SignUp</Button>
              <Button onClick={() => { navigate("/cart")}}><FaOpencart size={30} /><Badge bg="secondary" style={{ top: "-10px" }}>{cartData.length}</Badge></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1