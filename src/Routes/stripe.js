const router = require("express").Router();
// const stripe = require("@stripe/stripe-js")(process.env.STRIPE_KEY);
const dotenv = require('dotenv');
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
// CREATE PAYMENT
router.post("/payment", (req, res) => {

    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (stripeError, stripeRes) => {
        if(stripeError) {
            res.status(500).json(stripeError)
        } else {
            res.status(200).json(stripeRes)
        }
    })
})


module.exports = router;