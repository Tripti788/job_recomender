import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import logo from '../assets/favicon.jpeg';

const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg  " style={{backgroundColor:'white', boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.5)'}}>
  <div className="container-fluid">
    
     {/* Logo */}
       <Link className="navbar-brand d-flex align-items-center" to="/">
  <img
    src={logo}
    alt="Logo"
    style={{
      height: '45px',
      width: '45px',
      borderRadius: '50%',
      marginRight: '10px',
      boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)',
    }}
  />
  <span
   className='nav-logo-text'
  >
    JR
  </span>

  

</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto text-center gap-3">
        <li className="nav-item">
          <Link className="nav-link fw-medium text-dark nav-hover"   to='/'>Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link fw-medium text-light nav-hover"  to='/register'>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-medium text-light nav-hover"  to='/login'>Login</Link>
        </li> */}
      

      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
