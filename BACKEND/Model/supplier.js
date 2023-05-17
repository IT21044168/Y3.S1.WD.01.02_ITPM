const mongoose = require("mongoose");
const schema = mongoose.Schema;

const supplierSchema = new schema({
    supplierId : {
        type : String,
        required : true
    },

    postTitle : {
        type : String,
        required : true
    },

    companyName : {
        type : String,
        required : true
    },
    companyAddress : {
        type : String,
        required: true
    },
    email : {
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
    price : {
        type: Number,
        required : true
    },
    minimumOrderQuantity : {
        type : Number,
        required : true
    },
    packaging : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required: true
    }
    

});

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = supplier;