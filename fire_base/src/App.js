import React, { useEffect, useState } from 'react'
import { SignUp } from './Components/SignUp/SignUp'
import { LogIn } from './Components/LogIn/LogIn'
import { NavBar1 } from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from './Components/DashBoard/DashBoard'
import { Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { author } from './Components/FireBase/FireBase'

const App = () => {

  const [user,setUser] = useState()

  useEffect(()=>{
    const loggedin = onAuthStateChanged(author,(x)=>{
      setUser(x)
    })

    return ()=>loggedin()

  },[])

  // console.log(user);

  return (
    <div>
      <NavBar1 />
      <Routes>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/Dashboard' element={user ? <DashBoard/> : <Navigate to={"/LogIn"}/>}/>
      </Routes>
    </div>
  )
}

export default App