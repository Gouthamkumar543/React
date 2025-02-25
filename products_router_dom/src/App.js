import React,{useState,useEffect} from 'react'
import { Navbar1 } from './Components/Navbar/Navbar'
import { Home } from './Components/Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { About } from './Components/Pages/About/About'
import { Products } from './Components/Pages/Products/Products'
import Axios from "axios"
import { Footer } from './Components/Footer/Footer'
import { SingleProduct } from './Components/Pages/singleProduct/singleProduct'

export const App = () => {

  const [data,setData] = useState([])

  useEffect(()=>{
    Axios.get('https://dummyjson.com/recipes').then(res=>{
      // console.log(res)
      setData(res.data.recipes)  
    }).catch(err=>console.log(err))
  },[]) 
  // console.log(data);
  

  return (
    <div>
      <Navbar1 />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products data={data}/>} />
        <Route path='/products/:name' element={<SingleProduct data={data}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
