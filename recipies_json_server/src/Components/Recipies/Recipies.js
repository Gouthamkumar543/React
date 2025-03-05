import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card,Button } from 'react-bootstrap'

const Recipies = () => {

    const [data,setData] = useState([])
    const [deleteRecipie,setDeleterecipie] = useState()

    useEffect(()=>{
        axios.get("http://localhost:5000/recipes")
        .then(res=>{
            // console.log(res.data)
            setData(res.data)
        })
        .catch(err=>console.log(err))
    },[deleteRecipie])

    // console.log(data);

    const HandleCartItems = (Item)=>{
        axios.post("http://localhost:5000/cartitems",Item)
        alert("Recipie added to cart sucessfully")
    }

    const handleDeleteRecipie = async (y)=>{
        try{
            await axios.delete(`http://localhost:5000/recipes/${Number(y.id)}`)
            setDeleterecipie(y)
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"20px",gap:20}}>
        {
            data.map(x=>{
                return(
                    <Card style={{ width: '26rem',border:"2px solid black",padding:"20px" }}>
                        <Card.Title><h4>{x.name}</h4></Card.Title>
                        <Card.Img variant="top" src={x.image} />
                        <Card.Body>
                            <Card.Text><h4>{x.cuisine}</h4></Card.Text>
                            <Card.Text>PrepTimeMinutes: {x.prepTimeMinutes}min</Card.Text>
                            <Card.Text>Difficulty: {x.difficulty}</Card.Text>
                            <Card.Text>Rating: {x.rating}</Card.Text>
                            <Button variant="primary" style={{margin:"2px"}} onClick={()=>{HandleCartItems(x)}}>AddToCart</Button>
                            <Button variant='primary' onClick={()=>{handleDeleteRecipie(x)}}>DeleteRecipie</Button>
                        </Card.Body>
                    </Card>
                )
            })
        }
    </div>
  )
}

export default Recipies