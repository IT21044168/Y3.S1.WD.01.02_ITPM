import React, { useState, useEffect, useRef } from "react";
import '../style/PrintDetails.css';
import axios from "axios";
import ReactPrint from "react-to-print";
import { useNavigate } from "react-router-dom";
//import logo from  "../assets/logo.jpg";

function PrintBuyerDetails() {

    const [buyer, setBuyer] = useState([]);
    const ref = useRef();

    const navigate = useNavigate();

    //getpost function(Display all income logs)
    useEffect(() => {
        function getBuyer() {
            axios.get('http://localhost:8070/buyer/').then((res) => {

            setBuyer(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getBuyer();
    },[])

    return (
        <>
            <main className='background'>
                <div>


                </div>
                <header>
                    <div id="printbtn">
                        <ReactPrint trigger={() => <button className="btn btn-primary my-2 mx-1 my-sm-0">Print</button>} content={() => ref.current} />
                        <button className="btn btn-danger" onClick={() => navigate("/buyer/allPosts")}>Back</button>
                    </div>
                </header>
                <section ref={ref} className="details-container">
                    <div className="company-details-header">
                        <h1>ALL BUYER DETAILS REPORT</h1>
                      { /* <img className="company-logo" src={logo} alt="logo" />*/}
                    </div>
                    <div className="company-details-container">
                        <div className="company-details">
                            <label className="detailsedit">Company Name : </label><label>JoyHoney(Pvt.) Ltd.</label>
                            <label className="detailsedit">Email : </label><label>joyhoney@gmail.com</label>
                            <label className="detailsedit">Phone: </label><label>0111457892</label>
                        </div>
                    </div>
                    <div className="title">
                        <h2>Buyer Post Details</h2>
                    </div>
                    <div className="table-container">
                        <table className="table" id="table">
                            <thead class="table-secondary">
                                <tr>
                                    <th scope="col">Post Title </th>
                                    <th scope="col">Description</th>
                                    <th scope="col">MobileNo</th>
                                    <th scope="col">Target Price</th>
                                    <th scope="col">Quantity Required</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Published Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {buyer.map((value, k) => {

                                    return <tr key={k}>

                                    <td>{value.postTitle}</td>
                                    <td>{value.description}</td>
                                    <td>{value.mobileNo}</td>
                                    <td>{value.targetPrice}</td>
                                    <td>{value.quantityRequired}</td>
                                    <td>{value.destination}</td>
                                    <td>{value.publishedDate}</td>
                                     <td>{new Date(value.date).toDateString()}</td>
                                    </tr>
                                })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="footer">
                        <label> This is a computer generated document. No signature is required.</label>
                        <label>Print on : {`${new Date().toLocaleString()}`}</label>
                    </div>
                </section>
            </main>
        </>
    )
}
export default PrintBuyerDetails;