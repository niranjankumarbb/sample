import React from 'react'
import {Navigate, Outlet} from 'react-router-dom' 

const ProtectedRoutes = (props) => {
    const {Component}= props
    // const isLoggedin= localStorage.getItem('key')
    const isLoggedin= true

  return (
    <div>
        <p>This is a ProtectedRoutes</p>
        {isLoggedin? <Component/> : <Navigate to='/'/>}
        {/* {isLoggedin? <Outlet /> : <Navigate to='/' /> } */}

    </div>
  )
}

export default ProtectedRoutes

 