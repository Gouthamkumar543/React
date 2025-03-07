import React from 'react'
import Navbar1 from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Recipies from './Components/Recipies/Recipies'
import Cart from './Components/Cart/Cart'
import { AddNewRecipie } from './Components/AddNewRecipie/AddNewRecipie'
import { SingleRecipie } from './Components/SingleRecipie/SingleRecipie'

const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipies' element={<Recipies/>}/>
        <Route path='/addrecipie' element={<AddNewRecipie/>}/>
        <Route path='/recipies/:name' element={<SingleRecipie/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App