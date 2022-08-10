const express = require('express');
const router = express.Router();
const User = require('../Models/User')
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

// USER SIGN UP

router.post("/signup", async (req, res) => {

    //create new user object upon data being sent to endpoint

    const newUser = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        // CryptoJS encrypts provided password before saving to DB for security
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSPHRASE).toString()
    })

    //.save() saves the new user object to the DB, .save() is asynchronous + uses promise
    //must make the entire .post function async and use await keyword for new savedUser variable.
    
    try {
        const savedUser = await newUser.save();
        // code to be sent client-side for success
        res.status(201).json(savedUser);

    } catch(error) {
        // code to be sent client-side for err/failure
        res.status(500).json(error);
        console.log(error);
    }          
})

//LOGIN

router.post("/login", async (req, res) => {
    try {
        // find the user object with corresponding email in DB for logging in

        const _user = await User.findOne({ email: req.body.email });

        const hashedPassword = CryptoJS.AES.decrypt(_user.password, process.env.SECRET_PASSPHRASE);

        const decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        // jwt for verifying that user object being used or modified in anyway belongs to the client
        const accessToken = jwt.sign(
            {
                id: _user._id, 
                isAdmin: _user.isAdmin
            },  
            process.env.JWT_SECRET_KEY,
            { expiresIn: "3d" }
        )

        //spread operator to send all user data but password as response, for security
        const { password, ...otherData } = _user._doc; //mongodb stores user data in _doc folder

        res.status(200).json({ ...otherData, accessToken });

    } catch {
        res.status(401).json("email or password is incorrect");
    }
    
})

module.exports = router;