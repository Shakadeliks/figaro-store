const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
// ROUTES
const userRoute = require('./routes/user');
const authRoute = require('./Routes/auth');
const productRoute = require('./Routes/product');
const cartRoute = require('./Routes/cart');
const orderRoute = require('./Routes/order');
const stripeRoute = require('./Routes/stripe');
const cors = require('cors');

//MIDDLEWARE


// environment variable 
dotenv.config();
//MONGODB CONNECTION 
// mongodb+srv://olwethumatiwana:<password>@figaro.nekq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const port = process.env.PORT || 3000;
const DbUrl = process.env.MONGODB_URL || `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@figaro.nekq8.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

app.use(cors({
    origin: "*",
}));
app.use('/api/auth', authRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use(express.json());
app.use(express.static(path.join(__dirname, "../figaro-front-end/build")))

app.get('*', (req, res) => {
    res.sendFile(path.join((__dirname, "../figaro-front-end/build", "index.html")))
})

app.listen(port, () => console.log(`server is at port ${port}`));

mongoose.connect(DbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("db connected"))
    .catch((error) => console.log(error));    

