const mongoose = require('mongoose') ;


//Product Schema
const productSchema = new mongoose.Schema({
    image : String ,
    name : String ,
    price : Number ,
    desc : String,

})


//Product Model creation
const product = mongoose.model('products' , productSchema);

module.exports = product