import React, { useState, useEffect } from 'react';
import axois from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "../style/buyer.css";
import swal from 'sweetalert';
//import Header from "./components/Header";

function ViewBuyerPost() {

  const navigate = useNavigate();

  //read data
  const [buyer, setbuyer] = useState([]);
  const [filteredBuyerPost, setfilteredBuyerPost] = useState([]);
  const [searchStartDate, setSearchStartDate] = useState("");
  const [searchEndDate, setSearchEndDate] = useState("");
  

  
  
  

  const deleteBuyerPost = (buyerId) => {


    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Post details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Post is removed!", {
          icon: "success",
          buttons: false,
          timer:2000,
        });
        axois.delete(`http://localhost:8070/buyer/deletePost/${buyerId}`)
        .then((res) => {
          const filteredBuyerPost = buyer.filter(item => item._id !== buyerId)
          setbuyer(filteredBuyerPost);
        }).catch((err) => {
          console.log(err.message);
        })

      } else {
        swal({
          text:"Your Income details are saved!",
          buttons: false,
        timer:2000
      }
          );
      }
    });

    
  }

  useEffect(() => {

    axois.get("http://localhost:8070/buyer/allPosts").then((res) => {

      setbuyer(res.data);

      console.log(res.data);

    }).catch((err) => {

      console.log(err.message);

    })

  }, [])

  useEffect(() => {
    setfilteredBuyerPost(buyer);
    if (searchStartDate || searchEndDate) {
      var arr = [];
      //var reg;
      buyer.forEach(buyer => {

        if (searchStartDate) {
          if (searchStartDate > buyer.date)
            return;
        }

        if (searchEndDate) {
          if (searchEndDate < buyer.date)
            return;
        }
        {
          arr.push(buyer);
        }
      })
      setfilteredBuyerPost(arr);
    }
  }, [searchStartDate, searchEndDate, buyer])



  
  return (

    <div className="container bg-white" id='accounts'>

      <nav className="topNavigation navbar navbar-light bg-light px-2 d-flex justify-content-between">
        <div>
          <form className="form-inline" >
            <div className='input-group'>
              <span className="navbar-brand"><Link to="/buyer" className="nav-link">JoyHoney</Link></span>
              <div style={{ display: "flex" }}>
                <label htmlFor="searchStartDate" className="form-label me-1">From: </label>
                <input type="date" name="searchStartDate" id="searchStartDate" className="form-control form-control-sm mb-2" style={{ width: "150px" }} value={searchStartDate}
                  onChange={(e) => { setSearchStartDate(e.target.value) }}
                />
                <label htmlFor="searchEndDate" className="form-label me-1 ms-2"> To: </label>
                <input type="date" name="searchEndDate" id="searchEndDate" className="form-control form-control-sm mb-2" style={{ width: "150px" }} value={searchEndDate}
                  onChange={(e) => { setSearchEndDate(e.target.value) }}
                />
              </div>

              
            </div>
          </form>
        </div>
        
        <div>
          <button className="btn btn-outline-info my-2 mx-1 my-sm-0">
            <Link to="/buyer/PrintBuyerDetails" className="nav-link">Report</Link>
          </button>
          <button className="btn btn-outline-info my-2 mx-1 my-sm-0">
            <Link to="/buyer/addPost" className="nav-link">Create Post</Link>
          </button>

        </div>
      </nav>
      
      <h1><center>ALL Posts</center></h1>
      <hr></hr>
      <hr></hr>
      {
        <table className="table"> <thead> <tr className='table-dark'>
          <th scope="col">buyerId</th>
          <th scope="col">postTitle</th>
          <th scope="col">Description</th>
          <th scope="col">mobileNo</th>
          <th scope="col">publishedDate</th>
          <th scope="col">targetPrice</th>
          <th scope="col">quantityRequired</th>
          <th scope="col">paymentTerms</th>
          <th scope="col">destination</th>
          <th scope="col">suppliersFrom</th>
          <th />


        </tr>
        </thead>
          <tbody>
            {filteredBuyerPost.map((val, key) => {
              return <tr key={key}>
                <td>{val.buyerId}</td>
                <td>{val.postTitle}</td>
                <td>{val.description}</td>
                <td>{val.mobileNo}</td>
                <td>{new Date(val.date).toDateString()}</td>
                <td>{val.targetPrice}</td>
                <td>{val.quantityRequired}</td>
                <td>{val.paymentTerms}</td>
                <td>{val.destination}</td>
                <td>{val.suppliersFrom}</td>
                <td><button onClick={() => navigate(`/buyer/updatePost/${val._id}`)} className="btn btn-success p-2 me-2">Edit</button>
                  <button onClick={() => { if (window.confirm("Do you confirm?")) { deleteBuyerPost(val._id) } }} className="btn btn-danger p-2 me-2">Delete</button>
                </td>
              </tr>
            })
            }
          </tbody>
        </table>
      }
    </div>
  )
}


export default ViewBuyerPost;