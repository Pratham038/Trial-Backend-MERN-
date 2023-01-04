const mongoose = require('mongoose')
const Product = require("../models/ProductsModel");

//get all products
const getProducts = async (req,res)=>{
    const product = await Product.find({}).sort({createdAt:-1})
    res.status(200).json(product)
}

// get a single product 

const getProduct = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'NO such PRODUCT'})
    }

    const product = await Product.findById(id)
    if (!product){
        return res.status(404).json({error:'No such PRODUCT'})
    }
    res.status(200).json(product)

}

// create a new workout
const createProduct = async(req,res) => {
    const { id, name, price, description, category, featured } = req.body;

    try {
      const product = await Product.create({
        id,
        name,
        price,
        description,
        category,
        featured,
      });
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
}

// delete a workout

const delteProduct = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'NO such PRODUCT'})
    }

    const product = await Product.findOneAndDelete({_id:id})
    if (!product){
        return res.status(404).json({error:'No such PRODUCT'})
    }
    res.status(200).json(product)

    }


//update workout

const updateProduct = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'NO such PRODUCT'})
    }
    const product = await Product.findOneAndUpdate({_id: id},{
       ...req.body 
    })
    if (!product){
        return res.status(404).json({error:'No such PRODUCT'})
    }
    res.status(200).json(product)
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    delteProduct,
    updateProduct
}