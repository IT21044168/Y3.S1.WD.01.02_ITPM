import React,{useState} from 'react';


function SellerAdvertise() {

    const [date, setDate] = useState(new Date());

  return (
    <div>
        <br/>
        <h2>Seller Advertisement</h2>
        <br/>

        <div className="post" style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv58vYP0Fzi9tz0xKFlhQBK70TYAv09-eF4_V2LhjNcgt0b6yJxjQuoKbkhrpZNf5JGM0&usqp=CAU)` }}>

        <form className=" form-background row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Supplier Name</label>
    <input type="text" class="form-control" id="validationCustom01" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Company Name</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend"></span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Company Address</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Post Title</label>
    <input type="text" class="form-control" id="validationCustom02"  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Description</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>

  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Email</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Mobile Number</label>
    <input type="text" class="form-control" id="validationCustom03" required/>

    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>

  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Published Date</label>
    
    <input id="date" style={{width: "250px"}} className="form-control" type="date" required onChange={
                        (e)=>{setDate(e.target.value);
                    }}/>
   
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>

  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Price</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide the price
    </div>
  </div>

  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Minimum Order Quantity</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a value.
    </div>
  </div>

  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Packaging</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a value.
    </div>
  </div>

  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
   </div>
    
  )
}
export default SellerAdvertise;

