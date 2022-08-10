import express, { json } from 'express';
const app = express();
import { config } from 'dotenv';
import { connect } from 'mongoose';
// ROUTES
import userRoute from './routes/user';
import authRoute from './Routes/auth';
import productRoute from './Routes/product';
import cartRoute from './Routes/cart';
import orderRoute from './Routes/order';
import stripeRoute from './Routes/stripe';
import cors from 'cors';

//MIDDLEWARE


// environment variable 
config();
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
app.use(json());
app.use(path.join(__dirname, "../figaro-front-end/build"))

app.get('*', (req, res) => {
    res.sendFile(path.join((__dirname, "../figaro-front-end/build", "index.html")))
})

app.listen(port, () => console.log(`server is at port ${port}`));

connect(DbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("db connected"))
    .catch((error) => console.log(error));    

