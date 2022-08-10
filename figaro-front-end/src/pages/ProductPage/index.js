import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';
import {
    Container,
    ImgContainer,
    Wrapper,
    Image,
    InfoContainer,
    Title,
    Desc,
    Price,  
    FilterContainer,
    Filter,
    FilterSize,
    FilterTitle,
    FilterSizeOption,
    AmountContainer,
    AddContainer,
    Amount,
    AddToCartBtn,
    } from './ProductPage.styles';
import { Add, Remove } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { addToCart, getTotals } from "../../Redux/cartRedux";
import { useDispatch, useSelector } from 'react-redux';

const ProductPage = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const cart = useSelector(state=> state.cart.cartProducts)
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  
  useEffect(() => {

    const getProduct = async () => {

      const res = await axios.get("http://localhost:2000/api/products/find/" + id);

      setProduct([res.data])

    };

    getProduct();

  }, [id])

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])


  const handleQuantity = (type) => {
    type === "minus" ? quantity > 1 && setQuantity(quantity - 1) : setQuantity(quantity + 1)
    
  }

  //onclick function to handle adding of product to redux cart state
  const handleAddToCart = (product, quantityToBeAdded, chosenSize) => {
    dispatch(addToCart({ product, quantityToBeAdded, size, totalPrice: product[0].price * quantityToBeAdded }));
  }

  console.log(product);
  
  return (
    <Container>
        <Navbar />
        <Wrapper>

          {product.map( item => ( 
            <>
                <ImgContainer key={item._id}>
                <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>
                    { item.title }
                  </Title>
                  <Desc>{ item.desc }</Desc>
                  <Price>$ { item.price }</Price>
                  <FilterContainer>
                    <Filter>
                      <FilterTitle>
                        size
                      </FilterTitle>
                          <FilterSize onChange={(e) => setSize(e.target.value)}>
                            <FilterSizeOption value="Choose Size" disabled >Choose Size</FilterSizeOption>
                            {item.size.map( (s, index) => (
                              <FilterSizeOption value={s} key={index}>{s}</FilterSizeOption>
                            ))}
                          </FilterSize>  
                    </Filter>
                  </FilterContainer>

                  <AddContainer>
                    <AmountContainer>
                      <Remove
                        style={{ cursor: "pointer" }}
                        onClick={() => handleQuantity("minus")}
                      />
                      <Amount>{quantity}</Amount>
                      <Add
                        style={{ cursor: "pointer" }}
                        onClick={() => handleQuantity("plus")}
                        
                      />

                    </AmountContainer>
                    <AddToCartBtn onClick={() => handleAddToCart(product, quantity, size)}>add to cart</AddToCartBtn>
                  </AddContainer>
                </InfoContainer>
            </>
          ))  
            
          
          }
          </Wrapper>
        
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductPage;