import React from 'react'
import { useNavigate, useParams, useLocation } from "react-router-dom";


const RouterHooksDemo = (props) => {
       let  {id}  = useParams()
       const location = useLocation()
  return (
    <div>
        RouterHooksDemo  <br/>
        <span> Id is {id}</span>
        {/* {console.log('id  is ', id)}  */}
        {console.log('location details is ', location)} 
        <h3> The current url using useLocation is {location.pathname}</h3>
    </div>
  )
}

export default RouterHooksDemo