/*id name price image description category featured  */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    id:{
        type: Number,
        
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        
    },
    featured:{
        type: Boolean,
        
    },
},{timestamps: true })

//builds collection
module.exports = mongoose.model('Product',productSchema)