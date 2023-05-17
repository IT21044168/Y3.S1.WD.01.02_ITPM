import React,{useState} from 'react';
import "../style/profile.css";


function Profile(){

    const [date, setDate] = useState(new Date());
    
    return(
        <div>
            <br/>
            <div className="post" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1352179635/vector/light-golden-brown-or-peach-gradient-coloured-textured-effect-horizontal-grunge-waffle-like.jpg?s=612x612&w=0&k=20&c=YrK02MUQfx9Nn94SqLL6KkSEo9XARUluEzB6NzjM2CU=})` }}>
            <div className ="container row g-2">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
           <form class="row g-3 needs-validation" novalidate>
            <h4>Profile Details</h4>
                <div className="form-group col-md-5">
                    <label for="validationUser" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="validationUser" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="form-group col-md-5">
                    <label for="validationUser" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="validationUser" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="form-group col-md-5">
                    <label for="validationUser" class="form-label">Mobile Number</label>
                    <div className="input-group">
                                <span class="input-group-text" id="inputGroupPrepend2">+94</span>
                                <input type="text" class="form-control" id="validationMobile" aria-describedby="inputGroupPrepend2" required/>
                            </div>
                </div>

                <div className="form-group col-md-5">
                    <label for="validationUser" class="form-label">Birthday</label>
                    <input id="date" style={{width: "250px"}} className="form-control" type="date" required onChange={
                        (e)=>{setDate(e.target.value);
                    }}/>
                </div>
               
                <div className="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                
                <div className = "drop-down" >
                <div className="form-group col-md-5">
                <label for="validationCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="validationCity" required/>
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <br/>
                <div className="dropdown">
                <label for="validationDistrict" class="form-label">District</label><br/>
                   
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Dropdown
                        </button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item" type="button">Ampara</button></li>
                                <li><button class="dropdown-item" type="button">Anuradhapura</button></li>
                                <li><button class="dropdown-item" type="button">Badulla</button></li>
                                <li><button class="dropdown-item" type="button">Batticalo</button></li>
                                <li><button class="dropdown-item" type="button">Colombo</button></li>
                                <li><button class="dropdown-item" type="button">Galle</button></li>
                                <li><button class="dropdown-item" type="button">Gampaha</button></li>
                                <li><button class="dropdown-item" type="button">Hambantota</button></li>
                                <li><button class="dropdown-item" type="button">Jaffna</button></li>
                                <li><button class="dropdown-item" type="button">Kalutara</button></li>
                                <li><button class="dropdown-item" type="button">Kandy</button></li>
                                <li><button class="dropdown-item" type="button">Kegalle</button></li>
                                <li><button class="dropdown-item" type="button">Kilinochchi</button></li>
                                <li><button class="dropdown-item" type="button">Kurunegala</button></li>
                                <li><button class="dropdown-item" type="button">Mannar</button></li>
                                <li><button class="dropdown-item" type="button">Matara</button></li>
                                <li><button class="dropdown-item" type="button">Matale</button></li>
                                <li><button class="dropdown-item" type="button">Monaragala</button></li>
                                <li><button class="dropdown-item" type="button">Mullativu</button></li>
                                <li><button class="dropdown-item" type="button">Nuwara Eliya</button></li>
                                <li><button class="dropdown-item" type="button">Polonnaruwa</button></li>
                                <li><button class="dropdown-item" type="button">Puttalam</button></li>
                                <li><button class="dropdown-item" type="button">Ratnapura</button></li>
                                <li><button class="dropdown-item" type="button">Trincomalee</button></li>
                                <li><button class="dropdown-item" type="button">Vavuniya</button></li>
                                
                            </ul>
                </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom04" class="form-label">Type</label>
                    <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Buyer</option>
                    <option>Supplier</option>
                    </select>
                    <div className="invalid-feedback">
                    Please select a type.
                    </div>
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

                <div className="col-12">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
        </form>
    </div>
    </div>
    </div>
    </div>
    )

}
export default Profile;




