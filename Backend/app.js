//Imports
const cors = require('cors');
const express = require('express');
const app = express();
const env = require('dotenv');
const productModel = require('./models/productModel');
const db = require('./config/mongoDb');




//Cors & Middlewares
app.use(cors());
env.config();
db();


app.use(express.json())
app.use(express.urlencoded({extended : true}))





//Routes
//Get product Route
app.get('/api/product', async (req , res) =>{
    try {
        let product = await productModel.find();
    res.json({
        message : " products sucessfully fetched ",
        data : product
    })
    } catch (error) {
       console.log(error); 
    }
});

//Create product Route
app.post('/api/product'  , async(req , res)=>{
    try {
        console.log(req.body);
        const {name , image , price , desc} = req.body;
        const createdProduct = await productModel.create({
            name ,
            image,
            price,
            desc
        });

        res.status(201).json({
            message : "product created Sucessfully" ,
            data : createdProduct 
        })
    } catch (error) {
        console.log(error);
    }
})


//Delete Route
app.delete('/api/product/:id' , async(req , res)=>{
    try {
        await productModel.deleteOne({_id : req.params.id});
        res.json({
            message : "deleted sucessfully" 
        })
    } catch (error) {
        console.log(error);
    }
})






//Server
app.listen(process.env.PORT || 3000 , () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
}
);
