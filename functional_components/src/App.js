import React, { use } from 'react'
import { Count } from './functional_components/count/count'
import { Login } from './functional_components/login/login'
import { Theme } from './functional_components/theme/theme'
import { useState } from 'react'
import { LuSunMoon } from "react-icons/lu";

export const App = () => {

  const [theme , setTheme] = useState(true)

  const Mode = ()=>{
    setTheme(!theme)
  }


  return (
    <div style={{backgroundColor: theme ? "white" : "black", color: theme ? "black" : "white", height:"100vh"}}>
      <button onClick={Mode}><LuSunMoon /></button>
      <Count />
      <Login />
      <Theme />
    </div>
  )
}
