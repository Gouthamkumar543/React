import React, { useState } from 'react'
import { Form, FormGroup , Button } from 'react-bootstrap'
import {signInWithEmailAndPassword} from "firebase/auth"
import { author } from '../FireBase/FireBase'
import { useNavigate } from 'react-router-dom'

export const LogIn = () => {

    const [logInDetails,setLogInDetails] = useState({
        email:'',
        password:''
    })

    const {email,password} = logInDetails

    const navigate = useNavigate()

    const HandleLogInChanges = (x)=>{
        setLogInDetails({...logInDetails,[x.target.name]:x.target.value})
    }

    // console.log(logInDetails);

    const HandleLogInSubmit = async (z)=>{
        z.preventDefault()
        try{
            await signInWithEmailAndPassword(author,email,password)
            alert("Login SucessFull")
            navigate("/Dashboard")    
        }catch(err){
            console.log(err);
            alert("LogIn failed email or password wronge")
        }
    }

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <Form style={{width:500}} onSubmit={HandleLogInSubmit}>
            <FormGroup>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' name='email' onChange={HandleLogInChanges}/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Password:</Form.Label>
                <Form.Control type='password' name='password' onChange={HandleLogInChanges}/>
            </FormGroup>
            <Button type='submit' style={{margin:10}}>LogIn</Button>
        </Form>
    </div>
  )
}
