const router = require('express').Router();
let Buyer = require('../Model/profile');//import the model


//  http://localhost:8070/buyer/createProfile
//sends the data in the request body

router.route('/createProfile').post((req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName;
    const mobileNo = Number(req.body.mobileNo);
    const brithday = req.body.brithday;
    const Address = req.body. Address;
    const city  = req.body. city ;
    const district = req.body.district ;
 
    
    const newUserProfile = new User({
        firstName ,
        lastName,
        mobileNo,
        brithday,
        Address,
        city,
        district
        

    })

//pass the created object to the model as a documnet
newUserProfile.save().then(() => {
        res.json("New User added")
    }).catch((err) => {
        console.log(err);
    })

})


//  http://localhost:8070/buyer/userDetails

router.route("/userDetails").get((req,res)=>{
    User.find().then((UserProfile)=>{
        res.json(UserProfile)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;