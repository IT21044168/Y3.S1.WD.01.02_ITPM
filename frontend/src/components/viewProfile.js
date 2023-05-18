import React, { useState, useEffect } from 'react';
import axois from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "../style/Home.css";
//import swal from 'sweetalert';
//import Header from "./components/Header";

function ViewProfile() {

  const navigate = useNavigate();

  //read data
  const [user, setuser] = useState([]);
  const [filteredUser, setfilteredBuyerPost] = useState([]);
 
  

  useEffect(() => {

    axois.get("http://localhost:8070/buyer/userDetails").then((res) => {

    setuser(res.data);

      console.log(res.data);

    }).catch((err) => {

      console.log(err.message);

    })

  }, [])

 



  
  return (

    <div className="container bg-white" id='accounts'>

      <nav className="topNavigation navbar navbar-light bg-light px-2 d-flex justify-content-between">
        <div>
          <form className="form-inline" >
            <div className='input-group'>
              <span className="navbar-brand"><Link to="/buyer/BuyerPage" className="nav-link">JoyHoney</Link></span>
              
            </div>
          </form>
        </div>
        
        <div>
          <button className="btn btn-outline-info my-2 mx-1 my-sm-0">
            <Link to="/buyer/BuyerPage" className="nav-link">Back</Link>
          </button>

        </div>
      </nav>
      
      <h1><center>User Details</center></h1>
      <hr></hr>
      <hr></hr>
      {
        <div class="row">
        <div class="col">
        <label >
              First Name:
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                readOnly
              />
            </label>
        </div>
        <div class="col">
        <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                readOnly
              />
            </label>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        

        <div class="row">
    <div class="col">
    <label>
              Brithday:
              <input
                type="text"
                name="brithday"
                value={new Date(user.brithday).toDateString()}
                readOnly
              />
            </label>
    </div>
    <div class="col">
    <label>
              Address:
              <input
                type="text"
                name="Address"
                value={user.Address}
                readOnly
              />
            </label>
    </div>
  </div>
  <br></br>
        <br></br>
        <br></br>
        <br></br>
  <div class="row">
    <div class="col">
    <label>
            City:
              <input
                type="text"
                name="city"
                value={user.city}
                readOnly
              />
            </label>
    </div>
    <div class="col">
    <label>
            District:
              <input
                type="text"
                name="district"
                value={user.district}
                readOnly
              />
            </label>
    
    </div>
  </div>
      </div>
      
      
        
      }
    </div>
  )
}


export default ViewProfile;