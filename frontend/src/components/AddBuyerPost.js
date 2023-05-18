import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../style/buyer.css'
import swal from 'sweetalert';


export default function AddBuyerPost() {
    const navigate = useNavigate();

    const [buyerId, setbuyerId] = useState("");
    const [postTitle, setpostTitle] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [description, setdescription] = useState("");
    const [targetPrice, settargetPrice] = useState("");
    const [publishedDate, setpublishedDate] = useState(new Date());
    const [quantityRequired, setquantityRequired] = useState("");
    const [paymentTerms, setpaymentTerms] = useState("") ;
    const [destination, setdestination] = useState("");
    const [suppliersFrom, setsuppliersFrom] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newBuyerPost = {
        buyerId,
        postTitle,
        description,
        mobileNo,
        publishedDate,
        targetPrice,
        quantityRequired,
        paymentTerms,
        destination,
        suppliersFrom
        }

        axios.post("http://localhost:8070/buyer/addPost", newBuyerPost).then(()=>{
            swal({
                title: "New Post Added!",
                icon: "success",
                buttons: false,
                timer: 1500
            })
                navigate("/buyer");
               
        }).catch((err)=>{
            alert(err);
        })
    }

    return (
        <div className="dev-container">
            <div className="form-container">
                <form className="form-container" onSubmit={sendData} class="p-3 mt-3"><br />
                    <button class="btn btn-secondary mb-4" onClick={() => navigate(`/buyer/allPosts`)}>Back</button>
                    <h1>Add New Buyer Post</h1>
                    <div className="mb-3">
                        <label for="buyerId" className="form-label">Buyer Id</label>
                        <input id="buyerId" className="form-control" type="text" required onChange={
                            (e) => {
                                setbuyerId(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="postTitle" className="form-label">Post Title</label>
                        <input id="postTitle" className="form-control" type="text" required onChange={
                            (e) => {
                                setpostTitle(e.target.value);
                            }} />
                    </div>
                    
                    <div className="mb-3">
                        <label for="description" className="form-label">Description</label>
                        <input id="description" className="form-control" type="text" onChange={
                            (e) => {
                                setdescription(e.target.value);
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
                        <label for="targetPrice" className="form-label">Target Price</label>
                        <input id="targetPrice" className="form-control" type="text" onChange={
                            (e) => {
                                settargetPrice(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="quantityRequired" className="form-label">Quantity Required</label>
                        <input id="quantityRequired" className="form-control" type="text" onChange={
                            (e) => {
                                setquantityRequired(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="paymentTerms" className="form-label">Payment Terms</label>
                        <input id="paymentTerms" className="form-control" type="text" onChange={
                            (e) => {
                                setpaymentTerms(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="destination" className="form-label">Destination</label>
                        <input id="destination" className="form-control" type="text" onChange={
                            (e) => {
                                setdestination(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="suppliersFrom" className="form-label">Suppliers From</label>
                        <input id="suppliersFrom" className="form-control" type="text" onChange={
                            (e) => {
                                setsuppliersFrom(e.target.value);
                            }} />
                    </div>
                
                    <div className="mb-3">
                        <label for="publishedDate" className="form-label">Date</label>
                        <input type="date" style={{ width: "250px" }} className="form-control" required onChange={
                            (e) => {
                                setpublishedDate(e.target.value);
                            }} />
                    </div>

                    <button type="submit" value id="btn-sub" className="btn btn-primary">
                    <Link to="/buyer/allPosts" className="linkbtn">Sumbit</Link>
                    </button>
                    <button type="cancel" value id="btn-sub" className="btn btn-danger">
                        <Link to="/buyer/allPosts" className="linkbtn">Cancel</Link>
                    </button>


                </form>
            </div>
        </div>

    )
}