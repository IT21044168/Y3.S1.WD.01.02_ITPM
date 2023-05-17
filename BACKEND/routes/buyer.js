const router = require('express').Router();
let Buyer = require('../Model/buyer');//import the model


//  http://localhost:8070/buyer/add
//sends the data in the request body

router.route('/addPost').post((req, res) => {
    const buyerId = req.body.buyerId;
    const postTitle = req.body.postTitle;
    const description = req.body. description;
    const mobileNo = Number(req.body.mobileNo);
    const publishedDate = req.body.publishedDate;
    const targetPrice = Number(req.body.targetPrice);
    const quantityRequired = Number(req.body. quantityRequired);
    const paymentTerms = req.body. paymentTerms;
    const destination  = req.body. destination ;
    const suppliersFrom = req.body.suppliersFrom ;
 
    
    const newBuyerPost = new Buyer({
        buyerId ,
        postTitle,
        description,
        mobileNo,
        publishedDate,
        targetPrice,
        quantityRequired,
        paymentTerms,
        destination,
        suppliersFrom

    })

//pass the created object to the model as a documnet
    newBuyerPost.save().then(() => {
        res.json("New Post added")
    }).catch((err) => {
        console.log(err);
    })

})


//  http://localhost:8070/buyer/allPosts

router.route("/allPosts").get((req,res)=>{
    Buyer.find().then((BuyerPost)=>{
        res.json(BuyerPost)
    }).catch((err)=>{
        console.log(err)
    })
})


//  http://localhost:8070/buyer/updatePost/:id---->:id is the id given by the db
//async--> waits for a promise till the updataion is done and shows a msg
//fecth the parameter in the url-->req.params

router.route("/updatePost/:id").put(async (req, res) => {
    let buyerId = req.params.id;

    //destructure the object
    const { BuyerId,
        postTitle,
        description,
        mobileNo,
        publishedDate,
        targetPrice,
        quantityRequired,
        paymentTerms,
        destination,
        suppliersFrom} = req.body;

    const updateBuyerPost = {
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
//finds if such buyerId is there
    const update = await Buyer.findByIdAndUpdate(buyerId,updateBuyerPost)
        .then(() => {
            res.status(200).send({ status: "Buyer Post Updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error in updatation", error: err.message })
        })
})

//  http://localhost:8070/buyer/delete/:id

router.route("/deletePost/:id").delete(async (req, res) => {
    let buyerId = req.params.id;
    await Buyer.findByIdAndDelete(buyerId)
        .then(() => {
            res.status(200).send({ status: "Buyer Post deleted" })
        }).catch((err) => {
            res.status(500).send({ status: "Error in deleting", error: err.message })
        })
})

http://localhost:8070/buyer/get/:id
router.route("/get/:id").get(async (req, res) => {
    let buyerId = req.params.id;
    const BuyerId = await Buyer.findById(buyerId)
        .then((buyer) => {
            res.status(200).send({ status: "Buyer Post fetched", buyer })
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with getting invoice", error: err.message });
        })
})






module.exports = router;





