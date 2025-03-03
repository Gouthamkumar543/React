import React, { useState } from 'react'

const SignUp = () => {

    const [SignUpDetails,SetSignUpDetails] = useState({name:"",email:"",password:"",confirmpassword:""})
    const [Users,SetUsers] = useState([])

    // SetSignUpDetails([...SignUpDetails,[x.target.name]:x.target.value])
    // console.log(SignUpDetails);  

    const HandleSignUpDetails = (x)=>{
        SetSignUpDetails({...SignUpDetails,[x.target.name]: x.target.value})
        console.log(SignUpDetails);  
    }

    const HandleSubmit = (x)=>{
        x.preventDefault()
        const AllUsersData = [...Users,SignUpDetails]
        localStorage.setItem("SignUpUsers",JSON.stringify(AllUsersData))
        SetUsers(AllUsersData)
        SetSignUpDetails({name:"",email:"",password:"",confirmpassword:""})
    }

  return (
    <div>
        {/* <form>
            <input type='name' placeholder='Enter your Name' name='name' onChange={(x)=>{SetSignUpDetails(x.target.value)}}/>
            <input type='email' placeholder='Enter your Email' name='email' onChange={(x)=>{SetSignUpDetails(x.target.value)}}/>
            <input type='password' placeholder='Enter your Password' name='password' onChange={(x)=>{SetSignUpDetails(x.target.value)}}/>
            <input type='password' placeholder='Enter your ConfirmPassword'/>
            <button>Submit</button>
        </form> */}

        <form onSubmit={HandleSubmit}>
            <input type='name' placeholder='Enter your Name' name='name' onChange={HandleSignUpDetails} value={SignUpDetails.name}/>
            <input type='email' placeholder='Enter your Email' name='email' onChange={HandleSignUpDetails} value={SignUpDetails.gmail}/>
            <input type='password' placeholder='Enter your Password' name='password' onChange={HandleSignUpDetails} value={SignUpDetails.password}/>
            <input type='password' placeholder='Enter your ConfirmPassword' name='confirmpassword' onChange={HandleSignUpDetails} value={SignUpDetails.confirmpassword}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SignUp