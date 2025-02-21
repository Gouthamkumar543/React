// use for functional_components -count, Login, and Theme

// import React, { use } from 'react'
// import { Count } from './functional_components/count/count'
// import { Login } from './functional_components/login/login'
// import { Theme } from './functional_components/theme/theme'
// import { useState } from 'react'
// import { LuSunMoon } from "react-icons/lu";

// export const App = () => {

//   const [theme , setTheme] = useState(true)

//   const Mode = ()=>{
//     setTheme(!theme)
//   }


//   return (
//     <div style={{backgroundColor: theme ? "white" : "black", color: theme ? "black" : "white", height:"100vh"}}>
//       <button onClick={Mode}><LuSunMoon /></button>
//       <Count />
//       <Login />
//       <Theme />
//     </div>
//   )
// }




// use for life_cycle_methods

import React from 'react'
import { Mount_update } from './life_cycle_method/mount_update/mount_update'
import { Navbar1 } from './life_cycle_method/navbar/navbar'
import { Buttons_with_bgcolor } from './life_cycle_method/buttons_with_bgcolor/buttons_with_bgcolor'


export const App = () => {
  return (
    <div>
      <Navbar1 />
      <Buttons_with_bgcolor />
      <Mount_update />
    </div>  
  )
}

