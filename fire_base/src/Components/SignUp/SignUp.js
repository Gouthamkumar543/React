import React, { useState } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { set, ref } from 'firebase/database'
import { author, db } from '../FireBase/FireBase'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {

    const navigate = useNavigate()

    const [signUpDetails, setSignUpDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        role:"user"
    })

    const { name, email, password, confirmpassword,role } = signUpDetails

    const HandleSignUpChanges = (x) => {
        setSignUpDetails({ ...signUpDetails, [x.target.name]: x.target.value })
    }

    //    console.log(signUpDetails);

    const HandleSignUpSubmit = async (z) => {
        z.preventDefault()
        try {
            const SignUpUser = await createUserWithEmailAndPassword(author, email, password)
            alert('SignUp Sucessfully Done!!!')

            // console.log(SignUpUser);

            const User = SignUpUser.user
            // console.log(User);

            await updateProfile(User,{displayName:name})

            let RoleType = role === "admin" ? "Admins" : "Users"
            await set(ref(db, `Data/${RoleType}/` + name), {
                name: name,
                email: email,
                id: SignUpUser.user.uid,
                role:role
            })
            navigate("/LogIn")
        } catch (err) {
            console.log(err);
            alert("SignUp failed")
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form style={{ width: 500 }} onSubmit={HandleSignUpSubmit}>
                <FormGroup >
                    {/* <Form.Label>Role</Form.Label> */}
                    <Form.Select name='role' onChange={HandleSignUpChanges}>
                        <option value={"user"}>User</option>
                        <option value={"admin"}>Admin</option>
                    </Form.Select>
                </FormGroup>
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
