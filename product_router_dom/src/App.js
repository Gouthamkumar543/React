import React,{useState,useEffect} from 'react'
import Axios from "axios"
import { Navbar1 } from './Components/Navbar/Navbar'
import { Home } from './Components/Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { About } from './../../product_router_dom/src/Components/Pages/About/About'
import { Products } from './../../product_router_dom/src/Components/Pages/Products/Products'
import { SingleProduct } from './../../product_router_dom/src/Components/Pages/singleProduct/singleProduct'
import { Footer } from './../../product_router_dom/src/Components/Footer/Footer'
import "./App.css"

export const App = () => {

  const [data,setData] = useState([])

  useEffect(()=>{
    Axios.get('https://dummyjson.com/recipes').then(res=>{
      // console.log(res)
      setData(res.data.recipes)  
    }).catch(err=>console.log(err))
  },[]) 
  console.log(data);
  

  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products data={data}/>}/>
        <Route path='/products/:name' element={<SingleProduct data={data}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
