import React from 'react'
import "./Products.css"
import { useNavigate } from 'react-router-dom'

export const Products = ({ data }) => {

    const Navigate = useNavigate()
    // console.log(data);

  return (
    <div className='product-Container'>
        {data.map(x=>{
            return(
                <div className='product-card' onClick={()=>Navigate(`/menu/${x.name}`)}>
                    <img src={x.image} alt=''/>
                    <h3>{x.name}</h3>
                    <p>{x.cuisine}</p>
                    <button>ingredients</button>
                    <button>Order</button>
                </div>
            )
        })}
    </div>
  )
}
