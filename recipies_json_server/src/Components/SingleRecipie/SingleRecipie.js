import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./SingleRecipie.css"

export const SingleRecipie = () => {

    const { name } = useParams()
    console.log(name);


    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/recipes")
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const itemFound = data.find((x) => x.name === name) || {}
    console.log(itemFound);
    

    return (
        <div className='single-card'>
            <div className='single-card-left'>
                <h1>{itemFound.name}</h1>
                <h3>{itemFound.cuisine}</h3>
                <img src={itemFound.image} alt='' />
            </div>
            <div className='single-card-right'>
                <h1>Ingredients:</h1>
                <p>{itemFound.ingredients}</p>
                <h1>Instructions:</h1>
                <p>{itemFound.instructions}</p>
            </div>
        </div>
    )
}
