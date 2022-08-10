const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        amountToBePaid: { type: Number },
        delAddress: { type: Object, required: true }, //stripeJS returns address data as object
        status: { type: String, default: "Pending"}

    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema)