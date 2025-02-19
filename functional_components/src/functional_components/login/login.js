import React from 'react'
import { useState } from 'react'

export const Login = () => {
    const [showLogin , setlogin] = useState(false)
    const [showSignUp , setSignUp] = useState(false)

    const l_p = ()=>{
        setlogin(!showLogin)
    }

    const S_p = ()=>{
        setSignUp(!showSignUp)
    }


  return (
    <div style={{margin:"10px"}}>
        <button onClick={S_p}>SignUp</button>
          {showSignUp && <div>
              <input type="text" placeholder="name here" /><br />
              <input type="email" placeholder="email here" /><br />
              <input type="password" placeholder="password here" /><br />
              <input type="password" placeholder="password here" /><br />
          </div>}
          <button onClick={l_p}>LogIn</button>
          {showLogin && <div>
              <input type="email" placeholder="email here" /><br />
              <input type="password" placeholder="password here" /><br />
          </div>}
    </div>
  )
}
