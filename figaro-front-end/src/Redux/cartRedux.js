import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartProducts: [],
        cartTotalQuantity: 0,
        cartTotalPrice: 0,
    },
    reducers: {
        addToCart: (state, { payload }) => {
            
            const { product, quantityToBeAdded, size, totalPrice } = payload;

            const itemIndex = state.cartProducts.findIndex(item => item[0]._id === product[0]._id);

            if (itemIndex >= 0) {

                state.cartProducts[itemIndex].cartQuantity += payload.quantityToBeAdded;

                state.cartProducts[itemIndex] = { ...state.cartProducts[itemIndex], totalPrice: state.cartProducts[itemIndex].totalPrice += totalPrice };

                
            } else {

                const tempProduct = { ...payload.product, cartQuantity: quantityToBeAdded, cartSize: size, totalPrice: totalPrice };
                
                state.cartProducts.push(tempProduct);

            }

        },
        addOneToCart: (state, action) => {

            const itemIndex = state.cartProducts.findIndex(item =>
                item[0]._id === action.payload[0]._id);
            
            state.cartProducts[itemIndex].cartQuantity += 1;
        },
        decreaseCartQuantity: (state, action) => {

            const itemIndex = state.cartProducts.findIndex(item =>
                item[0]._id === action.payload[0]._id);


            if (state.cartProducts[itemIndex].cartQuantity > 1) {

                state.cartProducts[itemIndex].cartQuantity -= 1;

            } else if (state.cartProducts[itemIndex].cartQuantity === 1) {

                const newCartItems = state.cartProducts.filter(
                    item => item[0]._id !== action.payload.product[0]._id
                );

                state.cartProducts = newCartItems;

            }
            
        },
        removeFromCart: (state, action) => {
            const newCartItems = state.cartProducts.filter(cartItem => cartItem[0]._id !== action.payload[0]._id);

            state.cartProducts = newCartItems;
        },
        getTotals: (state, action) => {
            let { total, quantity } = state.cartProducts.reduce((cartTotal, cartItem) => {

                const { price } = cartItem[0];

                const { cartQuantity } = cartItem;

                console.log(price, cartQuantity);

                const itemTotal = price * cartQuantity;

                console.log(itemTotal);

                cartTotal.total += itemTotal;

                cartTotal.quantity += cartQuantity;

                console.log(cartTotal)

                return cartTotal;

            },
                {
                    total: 0,
                    quantity: 0
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalPrice = total;
        }
    }
})

export const { addToCart, addOneToCart, getTotals, decreaseCartQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
