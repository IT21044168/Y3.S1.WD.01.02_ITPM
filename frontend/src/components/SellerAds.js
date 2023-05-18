import React,{useState} from 'react'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../Style/SellerAds.css';
import swal from "sweetalert";



export default function SellerAds() {
    const navigate = useNavigate();

    const [supplierId , setsupplierId ] = useState("");
    const [supplierName, setsupplierName] = useState("");
    const [CompanyName, setCompanyName] = useState("");
    const [CompanyAddress, setCompanyAddress] = useState("");
    const [ description, setdescription] = useState("");
    const [publishedDate, setpublishedDate] = useState(new Date());
    const [ email , setemail] = useState("");
    const [mobileNo, setmobileNo] = useState("") ;
    const [price, setprice] = useState("");
    const [minimumOrderQuantity, setminimumOrderQuantity] = useState("");
    const [ packaging , setpackaging] = useState("");
    const [ postTitle , setpostTitle] = useState("");
    


    function sendData(e) {
        e.preventDefault();

        const newSupplierPost = {
            supplierId ,
            supplierName,
            postTitle,
            CompanyName,
            CompanyAddress,
            description,
            email,
            mobileNo,
            publishedDate,
            price,
            minimumOrderQuantity,
            packaging
        
        }

        axios.post("http://localhost:8070/supplier/addPost", newSupplierPost).then(()=>{
            swal({
                title: "New Post Added!",
                icon: "success",
                buttons: false,
                timer: 1500
            })
                navigate("/supplier/");
               
        }).catch((err)=>{
            alert(err);
        })
    }

    return (
        <div className="dev-container">
            <div className="form-container">
                <form className="form-container" onSubmit={sendData} class="p-3 mt-3"><br />
                    <button class="btn btn-secondary mb-4" onClick={() => navigate(`/supplier/allPosts`)}>Back</button>
                    <h1>Add New Supplier Post</h1>
                    <div className="mb-3">
                        <label for="buyerId" className="form-label">Supplier Name</label>
                        <input id="buyerId" className="form-control" type="text" required onChange={
                            (e) => {
                                setsupplierName(e.target.value);
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
                        <label for="Price" className="form-label"> Price</label>
                        <input id="Price" className="form-control" type="Number" onChange={
                            (e) => {
                                setprice(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="minimumOrderQuantity" className="form-label">Minimum Order Quantity</label>
                        <input id="minimumOrderQuantity" className="form-control" type="Number" onChange={
                            (e) => {
                                setminimumOrderQuantity(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input id="email" className="form-control" type="text" onChange={
                            (e) => {
                                setemail(e.target.value);
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
                        <label for="Packaging" className="form-label">Packaging</label>
                        <input id="Packaging" className="form-control" type="text" onChange={
                            (e) => {
                                setpackaging(e.target.value);
                            }} />
                    </div>
                
                    <div className="mb-3">
                        <label for="publishedDate" className="form-label">Published Date</label>
                        <input type="publishedDate" style={{ width: "250px" }} className="form-control" required onChange={
                            (e) => {
                                setpublishedDate(e.target.value);
                            }} />
                    </div>

                    <button type="submit" value id="btn-sub" className="btn btn-primary">Submit
                  
                    </button>
                    <button type="cancel" value id="btn-sub" className="btn btn-danger">
                        Cancel
                    </button>


                </form>
            </div>
        </div>

    )
}