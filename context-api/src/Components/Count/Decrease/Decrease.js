import React,{useContext} from 'react'
import { C_API } from '../../../App'

export const Decrease = () => {

    const {count,setCount} = useContext(C_API)

  return (
    <div>
        <button onClick={()=>{setCount(count-3)}}>-</button>
    </div>
  )
}
