const router = require('express').Router();
let Supplier = require('../models/supplier');//import the model




//  http://localhost:8070/supplier/add
//sends the data in the request body

router.route('/addPost').post((req, res) => {
    const supplierId = req.body.supplierId;
    const postTitle = req.body.postTitle;
    const companyName = req.body. companyName;
    const companyAddress = req.body. companyAddress;
    const description = req.body. description;
    const email = req.body. email;
    const mobileNo = Number(req.body.mobileNo);
    const publishedDate = req.body.publishedDate;
    const price = Number(req.body.price);
    const minimumOrderQuantity = Number(req.body. minimumOrderQuantity);
    const packaging = req.body. packaging;
    
 
    
    const newSupplierPost = new Supplier({
       supplierId ,
        postTitle,
        companyName,
        companyAddress,
        description,
        email,
        mobileNo,
        publishedDate,
        price,
        minimumOrderQuantity,
        packaging

    })

//pass the created object to the model as a documnet
    newSupplierPost.save().then(() => {
        res.json("New Supplier Post added")
    }).catch((err) => {
        console.log(err);
    })

})


//  http://localhost:8070/supplier/allPosts

router.route("/allPosts").get((req,res)=>{
    Supplier.find().then((SupplierPost)=>{
        res.json(SupplierPost)
    }).catch((err)=>{
        console.log(err)
    })
})


//  http://localhost:8070/supplier/updatePost/:id---->:id is the id given by the db
//async--> waits for a promise till the updataion is done and shows a msg
//fecth the parameter in the url-->req.params

router.route("/updatePost/:id").put(async (req, res) => {
    let SupplierId = req.params.id;

    //destructure the object
    const { supplierId,
        postTitle,
        companyName,
        companyAddress,
        description,
        email,
        mobileNumber,
        publishedDate,
        price,
        minimumOrderQuantity,
        packaging } = req.body;

    const updateSupplierPost = {
        supplierId,
        postTitle,
        companyName,
        companyAddress,
        description,
        email,
        mobileNumber,
        publishedDate,
        price,
        minimumOrderQuantity,
        packaging
        
    }
//finds if such supplierId is there
    const update = await Supplier.findByIdAndUpdate(SupplierId,updateSupplierPost)
        .then(() => {
            res.status(200).send({ status: "Supplier Post Updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error in updatation", error: err.message })
        })
})

//  http://localhost:8070/supplier/delete/:id

router.route("/deletePost/:id").delete(async (req, res) => {
    let supplierId = req.params.id;
    await Supplier.findByIdAndDelete(supplierId)
        .then(() => {
            res.status(200).send({ status: "Supplier Post deleted" })
        }).catch((err) => {
            res.status(500).send({ status: "Error in deleting", error: err.message })
        })
})





module.exports = router;