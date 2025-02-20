import React from 'react'
import { useState } from 'react'
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

export const Theme = () => {

    const [theme,setTheme] = useState(true)

    const Theme = ()=>{
        setTheme(!theme)
    }

  return (
    <div style={{backgroundColor: theme ? "white" : "black", color: theme ? "black" : "white"}}>
        <button onClick={Theme}>{theme ? <FaSun /> : <IoMoon />}</button>
        <h1>Goutham Kumar</h1>
        <h2>gouthamkumar0345@gmail.com</h2>
    </div>
  )
}
