import React, { useState } from 'react'
import { Modal, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const AddNewRecipie = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(true)
    const [newRecipieDetails, setNewRecipieDetails] = useState({
        name: "",
        image: "",
        cuisine: "",
        prepTimeMinutes: "",
        difficulty: "",
        rating: "",
        ingredients: "",
        instructions: ""
    })

    const modelhide = () => {
        setShow(false)
        navigate("/recipies")
    }

    const HandleRecipieChange = (x) => {
        setNewRecipieDetails({ ...newRecipieDetails, [x.target.name]: x.target.value })
    }

    const SubmitDetails = async (z) => {
        z.preventDefault()
        console.log(newRecipieDetails);
        await axios.post("http://localhost:5000/recipes", newRecipieDetails)
        setShow(false)
        navigate("/recipies")
    }

    return (
        <div>
            <Modal show={show} onHide={modelhide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Recipie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={SubmitDetails}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Recipie Name</Form.Label>
                            <Form.Control type="text" name='name' autoFocus onChange={HandleRecipieChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Recipie Image URL</Form.Label>
                            <Form.Control type="text" name='image' autoFocus onChange={HandleRecipieChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Recipie Cuisine</Form.Label>
                            <Form.Control type="text" name='cuisine' autoFocus onChange={HandleRecipieChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Recipie PrepTimeMinutes</Form.Label>
                            <Form.Control type="text" name='prepTimeMinutes' autoFocus onChange={HandleRecipieChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                            <Form.Label>Recipe Difficulty</Form.Label>
                            <Form.Select name="difficulty" onChange={HandleRecipieChange} required>
                                <option value="">Select Difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Recipie Rating</Form.Label>
                            <Form.Control type="text" name='rating' autoFocus onChange={HandleRecipieChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control as="textarea" name='ingredients' rows={3} onChange={HandleRecipieChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                            <Form.Label>Instructions</Form.Label>
                            <Form.Control as="textarea" name='instructions' rows={3} onChange={HandleRecipieChange} required />
                        </Form.Group>
                        <Button variant="secondary" onClick={modelhide} style={{margin:5}}>Close</Button>
                        <Button variant="primary" type='submit' style={{margin:5}}>Save Changes</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
