import React from 'react'
import { GiFullPizza, GiNoodles, GiChickenOven, GiCakeSlice } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { LuBeef } from "react-icons/lu";
import { BiBookBookmark } from "react-icons/bi";
import "./Home.css"

export const Home = () => {
  return (
    <div className='Home-page'>
      <div>
        <h1 style={{ color: 'antiquewhite' }}><strong>Welcome to Foodies – Your Ultimate Recipe Hub!</strong></h1>
        <h4 style={{ color: "antiquewhite" }}>Discover mouthwatering recipes from around the world! Whether you're in the mood for a hearty pasta, a sizzling chicken dish, or a sweet dessert, we've got recipes to inspire your cooking journey.</h4>
        <h2 style={{ color: 'antiquewhite' }}><strong>Explore Our Recipes:</strong></h2>
        <h4 style={{ color: "antiquewhite" }}><GoDotFill /> Tasty & easy-to-follow recipes for all skill level <BiBookBookmark style={{ color: "antiquewhite" }} size={30} /></h4>
        <h4 style={{ color: "antiquewhite" }}><GoDotFill /> Delicious Italian & Asian dishes to try at home <GiNoodles style={{ color: "antiquewhite" }} size={30} /> <GiFullPizza style={{ color: "antiquewhite" }} size={30} /></h4>
        <h4 style={{ color: "antiquewhite" }}><GoDotFill /> Flavorful meat-based recipes for beef & chicken lovers <GiChickenOven style={{ color: "antiquewhite" }} size={30} /> <LuBeef style={{ color: "antiquewhite" }} size={30}/></h4>
        <h4 style={{ color: "antiquewhite" }}><GoDotFill /> Sweet and delightful dessert recipes to satisfy cravings <GiCakeSlice style={{ color: "antiquewhite" }} size={30} /></h4>
      </div>
    </div>
  )
}
