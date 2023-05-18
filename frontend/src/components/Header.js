import React from 'react';
import '../Style/Header.css';
//import logo from './logo.jpg';

function Header() {

    return (
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">All Ads</a>
            </li>
          

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">Seller</a>
            </li>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="supplier/HomePage">Dashboard</a>
            </li>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Logout</a>
            </li>
            
            {/*<button className='button1'>Create an account</button>
            <button className='button1'>Login</button>*/}
            
          </ul>    
          </ul>  
          </ul>
          </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
     
    )
}

export default Header;