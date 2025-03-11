import React, { useState } from 'react'
import { author, db } from '../FireBase/FireBase'
import { signOut } from "firebase/auth"
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { get, ref, set } from 'firebase/database'

export const DashBoard = () => {

  const [details, setDetails] = useState({
    name: "",
    image: '',
    discription: ""
  })
  const [data, setData] = useState([])
  const [buttonClicked , setButtonClicked] = useState(false)

  const { name, image, discription } = details

  const loc = useLocation()
  // console.log(loc);

  const loggedin = loc.state.PersonData.name
  // console.log(loggedin);

  const loggedinPersonRole = loc.state.role
  // console.log(loggedinPersonRole);

  const navigate = useNavigate()

  const SignOut = async () => {
    signOut(author)
    alert("SIgnOut Sucessfully")
    navigate("/LogIn")
  }

  const Formhandle = (x) => {
    setDetails({ ...details, [x.target.name]: x.target.value })
  }

  const handleSubmit = async (z) => {
    z.preventDefault()
    try {
      await set(ref(db, `Data/${loggedinPersonRole}/${loggedin}/post/${name}`), {
        name: name,
        imageurl: image,
        discription: discription
      })
      alert("Data saved")
    } catch (err) {
      console.log(err);
    }
  }

  const GetData = async (y) => {
    y.preventDefault()
    setButtonClicked(!buttonClicked)
    try {
      const allData = await get(ref(db, `Data/${loggedinPersonRole}/${loggedin}/post`))
      console.log(allData.val());

      // const finalData = Object.keys(allData.val())
      // console.log(finalData);

      const finalData = Object.values(allData.val())
      console.log(finalData)

      setData(finalData)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <button onClick={SignOut}>Signout</button><br />
      <Form>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormControl type='text' name='name' onChange={Formhandle} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Image URl</FormLabel>
          <FormControl type='text' name='image' onChange={Formhandle} />
        </FormGroup>
        <FormGroup>
          <FormLabel>discription</FormLabel>
          <FormControl type='text' name='discription' onChange={Formhandle} />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      <Button onClick={GetData}>Get Data</Button>
      {buttonClicked && data.map(x => {
        return (
          <div>
            <h1>{x.name}</h1>
            <img src={x.imageurl} alt='' width={200}/>
            <p>{x.discription}</p>
          </div>
        )
      })}
    </div>
  )
}
