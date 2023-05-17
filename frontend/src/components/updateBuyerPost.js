import React, {useState , useEffect} from "react";
import axios from "axios";
import { useParams , useNavigate} from "react-router-dom";
import '../style/buyer.css';
import swal from 'sweetalert';


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
        
        const newIncome = {
            invoiceId,
            type,
            description,
            amount,
            date
        }

        axios.put(`http://localhost:8070/incomes/update/${ID.id}`, newIncome).then(()=>{
            //alert("Invoice updated!");


            swal({
                
                title: "Income details updated!",
                icon: "success",
                button: false,
                timer : 3000,
        });
            navigate("/incomes");
        }).catch(( err)=>{
            alert(err);
        })
    }

    
    function setDateFormat(){                       //<----format date for compatibilty with inputType='Date'
        var theDate = new Date(date);
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
            <form onSubmit={sendData} class="p-3 mt-3"><br />
            <button class="btn btn-secondary mb-4" onClick={() => navigate(`/incomes`)}>Back</button>
            <div className="mb-3">
                <h1>Update Income Log</h1><br/>
                  <label htmlFor="invoiceId" className="form-label">Invoice ID</label>
                    <input type="text" className="form-control" id="invoiceId" value={invoiceId} disabled style={{backgroundColor: "#cccccc"}} />
                </div>
                <div class="dropdown">


                        <label for="dog-names">Income Type:</label>

                        <select name="dog-names" id="dog-names" style={{ width: "250px" }} value={type} onChange={
                            (e) => { setType(e.target.value); }}>

                            <option value=""></option>
                            <option value="Wholesale">Wholesale</option>
                            <option value="Retail">Retail</option>
                            <option value="Others">Others</option>
                            
                           


                        </select>

                    </div>

                <div className="mb-3">  
                    <label htmlFor="name">Description</label>
                    <input id="name" className="form-control" type="text" name="name"  value={description} onChange={
                        (e)=>{setdescription(e.target.value);
                    }} />
                  </div>


                    <div className="mb-3">  
                    <label htmlFor="name">Amount</label>
                    <input id="name" className="form-control" type="text" name="name"  value={amount} onChange={
                        (e)=>{setamount(e.target.value);
                    }} />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="date">Date</label>
                    <input id="date" className="form-control" style={{width: "250px"}} type="date" value={setDateFormat()} required onChange={
                        (e)=>{setDate(e.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button className="btn btn-danger mx-2" onClick={() => navigate(`/incomes`)}>Cancel</button>
                   </form>
        </div>
        </div>
    )
}

export default UpdateBuyerPost();
