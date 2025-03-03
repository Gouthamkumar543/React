import React, { useState } from 'react'

export const LogIn = () => {

    const [LoginDetails,SetLoginDetails] = useState({email:"",password:""})

    const HandleLoginDetails = (x)=>{
        SetLoginDetails({...LoginDetails,[x.target.name]:x.target.value})
    }    

    const HandleSubmit = (x)=>{
        x.preventDefault()
        const AllUsers = JSON.parse(localStorage.getItem("SignUpUsers"))
        console.log(AllUsers);
        const UserDetail = LoginDetails
        const UserFound = AllUsers.find(x=>x.email === UserDetail.email && x.password === UserDetail.password)
        console.log(UserDetail);
        
        if(UserFound){
            alert("found")
            SetLoginDetails({email:"",password:""})
        }else{
            alert("not found")
        }
    }

   return (
    <div>
        <form onSubmit={HandleSubmit}>
            <input type='email' placeholder='Enter your Email' name='email' onChange={HandleLoginDetails}/>
            <input type='password' placeholder='Enter your Password' name='password' onChange={HandleLoginDetails}/>
            <button>Submit</button>
        </form>
    </div>
  )
}