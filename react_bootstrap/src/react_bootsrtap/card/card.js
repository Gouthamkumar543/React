import React from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import { WebData } from '../data/data'
import "./card.css"

export const Card1 = () => {
    return (
        <div className='card_element'>
            {
                WebData.map((x) => {
                    return (
                        <Card style={{ width: '18rem', padding:"15px" }}>
                            <Card.Img src={x.image}/>
                            <Card.Body>
                                <Card.Title>{x.title}</Card.Title>
                                <Card.Text>{x.description}</Card.Text>
                                <Card.Text>{x.price}</Card.Text>
                                <Button>Add Cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}
