const mongoose = require("mongoose");
const schema = mongoose.Schema;

const buyerSchema = new schema({
    buyerId : {
        type : String,
        required : true
    },

    postTitle : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required: true
    },
    
    mobileNo : {
        type : Number,
        required : true
    },

    publishedDate:{
        type : Date,
        required : true
    },

    targetPrice : {
        type: Number,
        required : true
    },

    quantityRequired : {
        type : Number,
        required : true
    },

    paymentTerms : {
        type : String,
        required : true
    },

    destination : {
        type : String,
        required : true
    },
    suppliersFrom :{
        type: String,
        required : true
    }
   
    

});

const Buyer = mongoose.model("BuyerPostDetail",buyerSchema);

module.exports = Buyer;

