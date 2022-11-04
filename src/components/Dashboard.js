import React from 'react'
import {Outlet} from 'react-router-dom' 


function Dashboard() {
  return (
    <div> 
  <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'skyblue',}}>
   {/* <nav class="navbar navbar-expand-lg fixed-bottom" style={{backgroundColor: 'skyblue'}}> */}

  <div className="container-fluid">
     <a class="navbar-brand" href="#">
      <img src="https://c8.alamy.com/comp/CERK8T/letter-n-in-fire-for-more-words-fonts-and-symbols-see-my-portfolio-CERK8T.jpg" alt="" width="30" height="24"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* gap to align to end is 'me-auto' */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/interaction">Parent child interaction</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/fetch">Fetch</a>
        </li>        
        <li className="nav-item">
          <a className="nav-link" href="/signup">Signup</a>
        </li>   
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>    
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Context
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/contextdemo">ContextDemo</a></li>
            <li><a className="dropdown-item" href="/showdemo">Showdemo</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> 
      </ul>
      <form className="d-flex" role="search" style={{textAlign: 'center'}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        <Outlet/> 

    </div>
  )
}

export default Dashboard