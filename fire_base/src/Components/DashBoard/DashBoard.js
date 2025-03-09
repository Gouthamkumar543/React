import React from 'react'
import { author } from '../FireBase/FireBase'
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'

export const DashBoard = () => {

    const navigate = useNavigate()

    const SignOut = async ()=>{
        signOut(author)
        alert("SIgnOut Sucessfully")
        navigate("/LogIn")
    }

  return (
    <div>DashBoard
        <button onClick={SignOut}>Signout</button>
    </div>
  )
}
