import React, { useState } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { set, ref } from 'firebase/database'
import { author, db } from '../FireBase/FireBase'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {

    const navigate = useNavigate()

    const [signUpDetails, setSignUpDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const { name, email, password, confirmpassword } = signUpDetails

    const HandleSignUpChanges = (x) => {
        setSignUpDetails({ ...signUpDetails, [x.target.name]: x.target.value })
    }

    //    console.log(signUpDetails);

    const HandleSignUpSubmit = async (z) => {
        z.preventDefault()
        try {
            const SignUpUser = await createUserWithEmailAndPassword(author, email, password)
            alert('SignUp Sucessfully Done!!!')
            await set(ref(db,"Users/"+name),{
                name:name,
                email:email,
                id:SignUpUser.user.uid
            })
            navigate("/LogIn")
        }catch(err){
            console.log(err);
            alert("SignUp failed")
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form style={{ width: 500 }} onSubmit={HandleSignUpSubmit}>
                <FormGroup >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type='text' name='name' onChange={HandleSignUpChanges} required />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' name='email' onChange={HandleSignUpChanges} required />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' name='password' onChange={HandleSignUpChanges} required />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type='password' name='confirmpassword' onChange={HandleSignUpChanges} required />
                </FormGroup>
                <Button style={{ margin: 10 }} type='submit'>SignUp</Button>
            </Form>
        </div>
    )
}
