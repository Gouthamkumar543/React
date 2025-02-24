import React from 'react'
import { useParams } from 'react-router-dom'
import "./singleProduct.css"

export const SingleProduct = ({ data }) => {
    console.log(data);
    
    // console.log(useParams());

    const {name} = useParams()
    
    const singleItem = data.find((x)=> x.name === name)
    console.log(singleItem);
    

  return (
      <div className='single-card'>
          <div className='single-card-left'>
            <h1>{singleItem.name}</h1>
            <h3>{singleItem.cuisine}</h3>
            <img src={singleItem.image} alt='' />
          </div>
          <div className='single-card-right'>
            <h1>Ingredients:</h1>
            <p>{singleItem.ingredients}</p>
            <h1>Instructions:</h1>
            <p>{singleItem.instructions}</p>
          </div>
      </div>
  )
}
