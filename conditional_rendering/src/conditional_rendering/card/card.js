import React from 'react'

export const Cards = (items) => {
    const Style = {
        width: "500px",
        height: "auto",
    }
    return (
        <div>
            <img src={items.I} width="100%" height="50%" />
            <h1>{items.T}</h1>
            <p>{items.D}</p>
            <p>Price : {items.P}</p>
            <p>Rating : {items.R}</p>
            <button>Buy now</button>
            <button>Add to cart</button>
        </div>
    )
}
