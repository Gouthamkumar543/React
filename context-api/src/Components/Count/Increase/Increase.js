import React,{useContext} from 'react'
import { C_API } from '../../../App'

const Increase = () => {

    const {count,setCount} = useContext(C_API)

  return (
    <div>
        <button onClick={()=>{setCount(count+2)}}>+</button>
    </div>
  )
}

export default Increase