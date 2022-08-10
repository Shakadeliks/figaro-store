const express = require('express');
const app = express();
const { verify } = require('jsonwebtoken');
const router = express.Router();
const Product = require('../Models/Product')
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require("./verifyToken")



// CREATE PRODUCT

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    } catch (error) {
        res(500).json(err);
    }
})

// UPDATING Product INFORMATION
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    //updating of Product info
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, 
            { new: true }
        );

        res.status(200).json(updatedProduct)

    } catch(error) {
        res.status(500).json(error)
    }
})

// DELETE PRODUCT

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL PRODUCTS
router.get("/", async (req, res) => {

    const queryNew = req.query.new; 
    const queryCategory = req.query.category;

    try {
        let products;
        
        if(queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if(queryCategory) {
            products = await Product.find({
                category: {
                    $in: [queryCategory]
                }
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);

    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    
    res.send('cors problem fixed:)');
    });


module.exports = router; 

