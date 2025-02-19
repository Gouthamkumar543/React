import React from 'react'
import { useState } from 'react';

export const Count = () => {

  console.log(useState());
  
  const [count,showCount] = useState(10)

  // function dec(){
  //   showCount(count-5)
  // }

  // function inc(){
  //   showCount(count+10)
  // }

  const dec = ()=>{
    showCount(count-1)
  }

  const inc = ()=>{
    showCount(count+1)
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Count Tracker</h1>
        <button onClick={dec}>-</button>
        <h1>{count}</h1>
        <button onClick={inc}>+</button>
    </div>
  )
}
