import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axois from "axios";
import '../style/Home.css';

 function BuyerPage() {
    const [buyer, setbuyer] = useState([]);
    useEffect(() => {

        axois.get("http://localhost:8070/buyer/BuyerPage").then((res) => {
    
          setbuyer(res.data);
    
          console.log(res.data);
    
        }).catch((err) => {
    
          console.log(err.message);
    
        })
    
      }, [])
    
     
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
        </div>
      </div> 
    </nav>
    <div className='home'>Welcome!
    <div>
    <button type="button" class="btn btn-primary">
            <Link to="/buyer/" className="nav-link">Back</Link>
          </button>
          

        </div>
<form>
  <br/>
  
    
    <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/9/0/hatk_honey-pot_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603793161.jpeg" class="rounded float-left" width="350px"></img>
<img src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg" class="rounded float-right"  width="350px"></img>
    </form>
    <button type="button" class="btn btn-primary btn-lg" >
      <Link to="/buyer/allPosts" className="nav-link">View Posts</Link>
    </button>
    <button type="button" class="btn btn-warning">
      <Link to="/buyer/userDetails" className="nav-link">View Profile</Link>
    </button>
    </div>
    </div>
  )
}


export default BuyerPage;