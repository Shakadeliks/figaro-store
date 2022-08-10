import React, { useEffect, useState } from 'react'
import { Container } from './Products.styles';
import Product from '../Product.js';
import axios from "axios"


const Products = ({ categ, sort }) => {

  const [products, setProducts] = useState([]);
// fetching of product data frm api
  useEffect( () => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categ 
            ? `http://localhost:2000/api/products?category=${categ}` 
            : `http://localhost:2000/api/products`
        );
        setProducts(res.data);
      } catch (error) { }
    }
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categ])

  useEffect( () => {
    if( sort === "newest") {
      products.sort( (a, b) => a.createdAt - b.createdAt)
    } else if ( sort === "lowest") {
      products.sort( (a, b) => a.price - b.price)
    } else {
      products.sort( (a, b) => b.price - a.price)
    }
  }, [sort, products])

  return (
    <Container>
        {products.map((item, index) => (
            <Product item={item} key={index}/>
        ))}
    </Container>
  )
}

export default Products;