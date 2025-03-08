import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button, Form, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Recipies = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [deleteRecipie, setDeleterecipie] = useState()
    const [showEditModel, setShowEditModel] = useState(false)
    const [editData, setEditData] = useState([])
    // const [editData, setEditData] = useState([
    // {
    //     name: "",
    //     image: "",
    //     cuisine: "",
    //     prepTimeMinutes: "",
    //     difficulty: "",
    //     rating: "",
    //     ingredients: "",
    //     instructions: ""
    // }])
    // const [edited,setEdited] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5000/recipes")
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    },[deleteRecipie])

    // console.log(data);

    const HandleCartItems = (event, Item) => {
        event.stopPropagation()
        axios.post("http://localhost:5000/cartitems", Item)
        alert("Recipie added to cart sucessfully")
    }

    const handleDeleteRecipie = async (event, del) => {
        event.stopPropagation()
        try {
            await axios.delete(`http://localhost:5000/recipes/${del.id}`)
            setDeleterecipie(del)
            setShowEditModel(false)
        } catch (err) {
            console.log(err);
        }
    }

    const openEditModel = (event, item) => {
        event.stopPropagation()
        setShowEditModel(true)
        setEditData(item)
    }

    const closeEditModel = () => {
        setShowEditModel(false)
    }

    const editRecipieChange = (editCard)=>{
        setEditData({...editData,[editCard.target.name]:editCard.target.value})
    }    

    // console.log(editData);
    

    const saveChanges = async ()=>{
        try{
            await axios.put(`http://localhost:5000/recipes/${editData.id}`,editData)
            // setEdited(true)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px", gap: 20 }}>
                {
                    data.map(x => {
                        return (
                            <Card style={{ width: '26rem', border: "2px solid black", padding: "20px" }} onClick={() => { navigate(`/recipies/${x.name}`) }}>
                                <Card.Title><h4>{x.name}</h4></Card.Title>
                                <Card.Img variant="top" src={x.image} />
                                <Card.Body>
                                    <h4>{x.cuisine}</h4>
                                    <Card.Text>PrepTimeMinutes: {x.prepTimeMinutes}min</Card.Text>
                                    <Card.Text>Difficulty: {x.difficulty}</Card.Text>
                                    <Card.Text>Rating: {x.rating}</Card.Text>
                                    <Button variant="primary" style={{ margin: "2px" }} onClick={(e) => { HandleCartItems(e, x) }}>AddToCart</Button>
                                    <Button variant='primary' onClick={(e) => { handleDeleteRecipie(e, x) }}>DeleteRecipie</Button>
                                    <Button style={{ margin: "2px" }} onClick={(e) => { openEditModel(e, x) }}>Edit recipie</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
            <div>
                <Modal show={showEditModel} onHide={closeEditModel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Recipie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Recipie Name</Form.Label>
                                <Form.Control type="text" name='name' value={editData.name} onChange={editRecipieChange} autoFocus required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Recipie Image URL</Form.Label>
                                <Form.Control type="text" name='image' value={editData.image} onChange={editRecipieChange} autoFocus required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Recipie Cuisine</Form.Label>
                                <Form.Control type="text" name='cuisine' value={editData.cuisine} onChange={editRecipieChange} autoFocus required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Recipie PrepTimeMinutes</Form.Label>
                                <Form.Control type="text" name='prepTimeMinutes' value={editData.prepTimeMinutes} onChange={editRecipieChange} autoFocus required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                <Form.Label>Recipe Difficulty</Form.Label>
                                <Form.Control name="difficulty" value={editData.difficulty} onChange={editRecipieChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Recipie Rating</Form.Label>
                                <Form.Control type="text" name='rating' value={editData.rating} onChange={editRecipieChange} autoFocus required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                <Form.Label>Ingredients</Form.Label>
                                <Form.Control as="textarea" name='ingredients' value={editData.ingredients} onChange={editRecipieChange} rows={3} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                <Form.Label>Instructions</Form.Label>
                                <Form.Control as="textarea" name='instructions' value={editData.instructions} onChange={editRecipieChange} rows={3} required />
                            </Form.Group>
                            <Button variant="secondary" onClick={closeEditModel} style={{ margin: 5 }}>Close</Button>
                            <Button variant="primary" type='submit' onClick={saveChanges} style={{ margin: 5 }}>Save Changes</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Recipies