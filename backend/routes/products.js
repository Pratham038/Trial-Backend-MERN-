const express = require("express");

const {createProduct,getProduct,getProducts,updateProduct,delteProduct} = require('../controllers/productControllers')
const Product = require("../models/ProductsModel");
const router = express.Router();

//get all
router.get("/", getProducts);

//get single product
router.get("/:id", getProduct);

//post a new product
router.post("/", createProduct);

//dele
router.delete("/:id", delteProduct);

//update
router.patch("/:id", updateProduct);

module.exports = router;
