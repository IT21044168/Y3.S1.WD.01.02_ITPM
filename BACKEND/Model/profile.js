const mongoose = require("mongoose");
const schema = mongoose.Schema;

const buyerProfileSchema = new schema({
   firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    
    mobileNo : {
        type : Number,
        required : true
    },

    brithday:{
        type : Date,
        required : true
    },

    Address : {
        type: Number,
        required : true
    },

    city : {
        type : Number,
        required : true
    },

    district : {
        type : String,
        required : true
    }
   
    

});

const BuyerProfile = mongoose.model("BuyerDetail",buyerProfileSchema);

module.exports = BuyerProfile;

