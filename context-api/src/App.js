import React, { createContext, useEffect, useState } from 'react'
import { Number } from './Components/Count/Number/Number';
import Increase from './Components/Count/Increase/Increase';
import { Decrease } from './Components/Count/Decrease/Decrease';
import BgColor from './Components/Color/BgColor/BgColor';
import axios from 'axios'
import { Data } from './Components/Data/Data';
import { Navbar1 } from './Components/WebSite/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Recipes from './Components/WebSite/Recipes/Recipes';
import Cart from './Components/WebSite/Cart/Cart';

export const C_API = createContext()
console.log(C_API);

const App = () => {

  const [count, setCount] = useState(0)
  const [bgColor, setBgColor] = useState("green")
  const [data, setData] = useState([])
  const [cart,setCart] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(res => {
        console.log(res.data.recipes)
        setData(res.data.recipes)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div style={{ backgroundColor: bgColor}}>
      <C_API.Provider value={{ count, setCount, bgColor, setBgColor, data, cart, setCart }}>
        <Navbar1 />
        <Routes>
          <Route path='/recipes' element={<Recipes />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Increase />
        <Number />
        <Decrease />
        <BgColor />
        <Data />
      </C_API.Provider>
    </div>
  )
}

export default App