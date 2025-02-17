import React from 'react'

export const Single_data = (x) => {
  return (
    <div style={{textAlign:"center", fontSize:"20px", color:"red"}}>
        <p>{x.N}</p>
        <p>{x.A}</p>
        <p>{x.P}</p>
        <p>{x.G}</p>
        <p>{x.E}</p>
    </div>
  )
}
