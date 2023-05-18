import React from 'react';
import '../components/createBuyerProfile.js';
import '../style/Header.css';
import '../style/Home.css';
import honey from '../assets/honey.jpeg';
import bee from '../assets/bee.jpeg';
import raw from '../assets/raw.jpeg';

function Header() {

    return (
      <div className="container bg-white" id='accounts'>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/buyer/allPosts">All Posts</a>
              
            </li>
          

         

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="buyer/BuyerPage">Dashboard</a>
            </li>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Logout</a>
            </li>
            
            
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

        <div className='home1'>
            <div className='home'>Welcome to JoyHoney!</div>
                      
             <img src={bee} alt="Image" />
              <img src={raw} alt="Image" />
              <img src={honey} alt="Image" />
              <p>Don't have an account? <a href="/buyer/createProfile" class="create-account-link">Create Account</a></p>
              <p>Already have an account? <a href="/buyer/BuyerPage" class="create-account-link">View My Account</a></p>
              </div> 
      
      </div>
      
     
    )
}

export default Header;



