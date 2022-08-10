import React, { useEffect, useState } from 'react'
import { Container } from './HomeProducts.styles';
import Product from '../Product.js';
import axios from "axios"
const HomeProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {

        const getProducts = async () => {
            try {
              const res = await axios.get(
                `http://localhost:2000/api/products`
              );

              setProducts(res.data)
            }
            catch(error){ }  

        }

        getProducts();
    }, [])

    //shuffle the product array 
  const productArrShuffle = [...products].sort(() => 0.5 - Math.random());
  
    //get new array of the first 8 product objects, so different products can be displayed on each load on home page  
    let randomHomeProducts = productArrShuffle.slice(0, 8);


  return (
    <Container>
        {randomHomeProducts.map((item) => (
            <Product item={item} key={item._id}/>
        ))}
    </Container>
  )
}

export default HomeProducts;