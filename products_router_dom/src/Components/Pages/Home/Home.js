import React from 'react'
import { GiFullPizza } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { GiChickenOven } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { LuBeef } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import "./Home.css"

export const Home = () => {
  return (
    <div className='Home-page'>
      <div>
        <h1 style={{color:'lightgray'}}><strong>Welcome to Foodies – Where Every Bite is a Delight!</strong></h1>
        <h4 style={{color:"grey"}}>At Foodies, we believe that great food brings people together. Whether you're craving a crispy pizza, a juicy burger, or a comforting bowl of pasta, we've got something for every taste bud!</h4>
        <h2 style={{color:'lightgray'}}><strong>What We Offer:</strong></h2>
        <h4 style={{color:"grey"}}><GoDotFill />Freshly prepasilver, high-quality meals  <GiFullPizza style={{color:"silver"}} size={30} /> <GiChickenOven style={{color:"silver"}} size={30} /></h4>
        <h4 style={{color:"grey"}}><GoDotFill />A variety of cuisines, from Italian to Asian  <GiNoodles style={{color:"silver"}} size={30} /> <LuBeef style={{color:"silver"}} size={30} /></h4>
        <h4 style={{color:"grey"}}><GoDotFill />Special discounts & exciting deals  <BiSolidOffer style={{color:"silver"}} size={30} /></h4>
      </div>
    </div>
  )
}
