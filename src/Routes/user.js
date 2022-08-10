const express = require('express');
const { verify } = require('jsonwebtoken');
const router = express.Router();
const User = require('../Models/User')
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require("./verifyToken");


//UPDATING USER INFORMATION
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    //updating of user password
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.SECRET_PASSPHRASE
            ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, 
            { new: true }
        );

        res.status(200).json(updatedUser)

    } catch(error) {
        res.status(500).json(error)
    }
})

// DELETE USER

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const { password, ...otherData } = user._doc; 

        res.status(200).json(otherData);

    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
// included query if admin wants to access only latest added users etc.
    const query = req.query.new;

    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router; 

