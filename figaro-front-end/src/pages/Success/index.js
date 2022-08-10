import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userRequest } from '../../requestMethods';
import { Link } from 'react-router-dom';


const Success = () => {
    const {state} = useLocation();//to use the state passed upon payment in Cart component

    const data = state.data;
    const cart = state.products;
    const totals = state.totals;

    const currentUser = useSelector(state => state.user.currentUser);
    
    const [orderId, setOrderId] = useState(null);

    console.log(state);

    useEffect(() => {
        const createOrder = async () => {
        
            const res = await userRequest.post("/order", {
                userId: currentUser._id,
                products: cart.map(item => ({
                    productId: item[0]._id,
                    quantity: item.cartQuantity
                })),
                amount: totals.cartTotalPrice,
                delAddress: data.billing_details.address
            });
            console.log(res);
            setOrderId(res.data.id);
            console.log(orderId);
            
        };

        data && createOrder();
    }, [cart, data, currentUser, totals.cartTotalPrice, orderId]);
    
    console.log(orderId);

  return (
      <div
        style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}
      >

       {orderId ? `Your order has been created. Your order number is ${orderId}` : `Succesful! Your order is being created...`}

       <button
        style={{
            padding: 10, 
            marginTop: 20,
            border: "none",
            textTransform: "uppercase",
            backgroundColor: "black",
            color: "white",
            fontWeight: 600,
            cursor: "pointer"
        }}
       ><Link to="/" style={{color: "white", textDecoration: "none"}}>Go To Homepage</Link></button>   
    </div>
  )
}

export default Success;