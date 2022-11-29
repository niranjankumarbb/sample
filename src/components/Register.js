import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {Navigate} from 'react-router'

let status= false

 function Register(props) {
  const [status1, setStatus1]= useState(false)
   let navigate= useNavigate()

    const handleSubmit= ()=>{
    //  navigate('/dashboard')
    // status=true;
    console.log('status value- ', status)
    localStorage.setItem('key', true)

     setStatus1(prevStatus1=> !prevStatus1)

    // setStatus1('true')
    }
 
    return (
    <div>
         <h2> Login</h2>
         <label> Email</label><br/>
         <input type='text'/><br/><br/>

         <label> Password</label><br/>
         <input type='password'/><br/><br/>

        <button onClick={handleSubmit }>  Submit</button>
         {status1?  <Navigate to ='/dashboard'/>  : <button>true</button>}
 
        {/* {status1 &&  <button>true</button> } */}
    </div>
  )
}

export default Register
 