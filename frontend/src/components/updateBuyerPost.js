import React, {useState , useEffect} from "react";
import axios from "axios";
import { useParams , useNavigate} from "react-router-dom";
import '../style/buyer.css';
import swal from 'sweetalert'


function UpdateBuyerPost(){

    const ID = useParams();
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



    useEffect(()=>{
            axios.get(`http://localhost:8070/buyer/get/${ID.id}`).then((res)=>{
              
                console.log(res.data.buyer); 
                
                setbuyerId(res.data.buyers.buyerId);
                setpostTitle(res.data.buyers.postTitle);
                setdescription(res.data.buyers.description);
                setmobileNo(res.data.buyers.mobileNo);
                settargetPrice(res.data.buyers.targetPrice);
                setquantityRequired(res.data.buyers.quantityRequired);
                setpaymentTerms(res.data.buyers.paymentTerms);
                setdestination(res.data.buyers.destination);
                setsuppliersFrom(res.data.buyers.suppliersFrom);
                setpublishedDate(res.data.buyers.publishedDate);

            }).catch((err)=>{
                alert(err.message);
            })
    },[ID.id])


    function sendData(e){
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

        axios.put(`http://localhost:8070/buyer/updatePost/${ID.id}`, newBuyerPost).then(()=>{
           


            swal({
                
                title: "Post details updated!",
                icon: "success",
                button: false,
                timer : 3000,
        });
            navigate("/buyer");
        }).catch(( err)=>{
            alert(err);
        })
    }

    
    function setDateFormat(){                       //<----format date for compatibilty with inputType='Date'
        var theDate = new Date(publishedDate);
        var year = theDate.getFullYear();
        var month = theDate.getMonth() + 1;
        var day = theDate.getDate();
        if(month < 10)
            month = "0" + month;
        if(day < 10)
            day = "0" + day;
        theDate = year +"-"+ month +"-"+ day;
        return theDate;
    }

    

    return(
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
                    <label htmlFor="date">Date</label>
                    <input id="date" className="form-control" style={{width: "250px"}} type="date" value={setDateFormat()} required onChange={
                        (e)=>{setpublishedDate(e.target.value);
                    }}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <button className="btn btn-danger mx-2" onClick={() => navigate(`/buyer/allPosts`)}>Cancel</button>
                   </form>
        </div>
        </div>
    )
}

export default UpdateBuyerPost;
