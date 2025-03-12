import React, {useContext} from 'react'
import { C_API } from '../../../App'

const BgColor = () => {

    const {bgColor,setBgColor} = useContext(C_API)

  return (
    <div>
        <button onClick={()=>{setBgColor("red")}}>Red</button>
        <button onClick={()=>{setBgColor("pink")}}>Pink</button>
        <button onClick={()=>{setBgColor("gold")}}>Gold</button>
        <button onClick={()=>{setBgColor("purple")}}>Purple</button>
    </div>
  )
}

export default BgColor