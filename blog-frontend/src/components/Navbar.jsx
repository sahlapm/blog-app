import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="collapse navbar-collapse Mainheader Mainheading" id="navbarTogglerDemo01">
             
              <h3 className="text-white  heading">Blog App </h3>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              </ul>
    
             
    
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item active nav-item">
                  <Link className='nav-link text-white navlnk' to='/'>Home</Link>
                </li>
    
                <li className="nav-item active nav-item">
                  <Link className='nav-link text-white navlnk' to='/read'>Blog CRUD</Link>
                </li>
    
               
    
              
    
              </ul>
            </div>
          </nav>
    </div>
  )
}

export default Navbar