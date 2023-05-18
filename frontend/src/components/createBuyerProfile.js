import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../style/buyer.css'
import swal from 'sweetalert';

function CreateBuyerProfile(){
    const navigate = useNavigate;

    const [firstName, setfirstName] =useState("");
    const [lastName, setlastName]=useState("");
    const [mobileNo, setmobileNo]=useState("");
    const [brithday, setbrithday]=useState("");
    const [Address, setAddress]=useState("");
    const [city, setcity]=useState("");
    const [district, setdistrict]=useState("");


    function sendData(e) {
        e.preventDefault();

        const newBuyerPost = {
            firstName,
            lastName,
            mobileNo,
            brithday,
            Address,
            city,
            district
        }

        axios.post("http://localhost:8070/buyer/createProfile", newBuyerPost).then(()=>{
            swal({
                title: "New User Added!",
                icon: "success",
                buttons: false,
                timer: 1500
            })
                navigate("/buyer/BuyerPage");
               
        }).catch((err)=>{
            alert(err);
        })
    }
    
    return (
        <div className="dev-container">
            <div className="form-container">
                <form className="form-container" onSubmit={sendData} class="p-3 mt-3"><br />
                
                    <h1>Add New User Details </h1>
                    
                    <div className="mb-3">
                        <label for="firstName" className="form-label">First Name</label>
                        <input id="firstName" className="form-control" type="text" required onChange={
                            (e) => {
                                setfirstName(e.target.value);
                            }} />
                    </div>
                    
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input id="lastName" className="form-control" type="text" onChange={
                            (e) => {
                                setlastName(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="mobileNo" className="form-label">MobileNo</label>
                        <input id="mobileNo" className="form-control" type="text" required onChange={
                            (e) => {
                                setmobileNo(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="brithday" className="form-label">Brithday</label>
                        <input type="date" style={{ width: "250px" }} className="form-control" required onChange={
                            (e) => {
                                setbrithday(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="Address" className="form-label">Address</label>
                        <input id="Address" className="form-control" type="text" onChange={
                            (e) => {
                                setAddress(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="city" className="form-label">City</label>
                        <input id="city" className="form-control" type="text" onChange={
                            (e) => {
                                setcity(e.target.value);
                            }} />
                    </div>
                    
                    
                    <div className="mb-3">
                        <label for="district" className="form-label">District</label>
                        <input id="district" className="form-control" type="text" onChange={
                            (e) => {
                                setdistrict(e.target.value);
                            }} />
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                
                   

                    <button type="submit" value id="btn-sub" className="btn btn-primary">
                    <Link to="/buyer/BuyerPage" className="linkbtn">Submit</Link>
                    </button>
                    <button type="cancel" value id="btn-sub" className="btn btn-danger">
                        <Link to="/buyer/" className="linkbtn">Cancel</Link>
                    </button>


                </form>
            </div>
        </div>
    )

}

export default  CreateBuyerProfile;