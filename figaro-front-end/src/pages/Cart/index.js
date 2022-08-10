import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {
    Container,
    Wrapper,
    Title,
    Top,
    Bottom,
    TopBtn,
    TopText,
    ProductInfo,
    Summary,
    Product,
    ProductDetails,
    Image,
    Details,
    ProductName,
    ProductSize,
    PriceDetails,
    ProductAmountContainer,
    ProductAmount,
    ProductPrice,
    Break,
    SummaryTitle,
    SummaryBtn,
    SummaryItem,
    SummaryItemPrice,
    SummaryItemText,
    RemoveBtn,
    RemoveImgContainer} from './Cart.styles';
import { Add, Remove } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCartQuantity, addOneToCart, removeFromCart, getTotals } from '../../Redux/cartRedux';
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import {useNavigate, Link} from "react-router-dom";


const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {

    const cart = useSelector(state => state.cart.cartProducts);
    const totals = useSelector(state => state.cart)

    const [stripeToken, setStripeToken] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDecreaseCart = (cartItem) => {

        dispatch(decreaseCartQuantity({...cartItem}))
    }

    const handleIncreaseCart = (cartItem) => {

        dispatch(addOneToCart(cartItem));
    }

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: totals.cartTotalPrice,
                })
                console.log(res);
                navigate("/success", {state: { data: res.data, products: cart, totals: totals }});
            } catch {}

        }
        stripeToken && makeRequest();
    }, [stripeToken, totals, navigate, cart])

    useEffect(() => {
        dispatch(getTotals())
      }, [cart, dispatch])

  return (
    <Container>
        <Navbar />

        <Wrapper>
            <Title>your cart</Title>
            {cart.length === 0 ? (
                <>
                    <Top>
                        <TopText style={{ textDecoration: 'none'}}>Your cart is empty</TopText>
                        <TopBtn><Link to="/" style={{textDecoration: "none", color: "black"}}>continue shopping</Link></TopBtn>
                    </Top>
                </>      
                ) 
                : (
                <>      
                <Top>

                    <TopBtn>continue shopping</TopBtn>
 

                </Top>
                <Bottom>
                    <ProductInfo>
                        {cart.map(product => (
                            <>
                            <Product>
                                <ProductDetails>
                                    <RemoveImgContainer>
                                        <Image src={product[0].img}/>
                                        <RemoveBtn onClick={() => handleRemoveFromCart(product)}>remove</RemoveBtn>    
                                    </RemoveImgContainer>
                                    <Details>
                                        <ProductName>
                                            <b>product: </b>
                                            {product[0].title}
                                        </ProductName>
                                        <ProductSize>
                                            <b>Size: </b>
                                            {product.cartSize}
                                        </ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Remove
                                            style={{ cursor: "pointer" }}
                                            onClick={()=>handleDecreaseCart(product)}
                                        />
                                        <ProductAmount>
                                            {product.cartQuantity}
                                        </ProductAmount>
                                        <Add
                                            style={{ cursor: "pointer"}}
                                            onClick={() => handleIncreaseCart(product)}
                                        />
                                    </ProductAmountContainer>
                                        <ProductPrice>${product.totalPrice}</ProductPrice>
                                </PriceDetails>
                            </Product>
                            <Break />
                            </>
                            ))
                            }
                    
                    </ProductInfo>
                    <Summary>

                        <SummaryTitle>order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>subtotal</SummaryItemText>
                            <SummaryItemPrice>${totals.cartTotalPrice}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>shipping</SummaryItemText>
                            <SummaryItemPrice>$20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >total</SummaryItemText>
                            <SummaryItemPrice>${totals.cartTotalPrice + 20}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout 
                            name="FIGARO"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${totals.cartTotalPrice + 20}`}
                            amount={(totals.cartTotalPrice + 20) * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <SummaryBtn>checkout</SummaryBtn>

                        </StripeCheckout>

                    </Summary>
                    
                </Bottom>
                </>          
                )}
        </Wrapper>

        <Footer />
    </Container>
  )
}

export default Cart;