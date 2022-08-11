
# Figaro Full-stack E-Commerce Store

This is project was intended to deepen my React skills in developing a fully fledged website.
Additionally, to further my exposure to Node and Express, integrating a MongoDB database with a server.


## Tech Stack

**Client:** React 17.0.2, React Redux 7.2.8, Reduxjs/toolkit 1.8.1, Styled-Components 5.3.3, Axios 0.26.1, Material-UI 4.12.3, Stripe Checkout 2.6.3

**Server:** Node, Express 4.17.3, MongoDB, JSONWebToken 8.5.1, Mongoose 6.2.4, Stripe 8.219.0, Crypto-js 4.1.1 


## FAQ

#### How to place a dummy order

Using the store it would make sense to try and place an order once items have been placed in your cart.
When your done browsing and adding item to your cart, click the checkout button in "Order Summary" section of the cart page.

-Enter your email and address details into the stripe form

-Proceed and use the following card details to simulate a successful payment

Card Number: 4242 4242 4242 4242 //
MM/YY: 0824 //
CVV: 123

NB: the feature to provide an order number after the payment still needs to be implemented.




## Demo

https://62823fecfe4e330008820fe9--splendid-tapioca-9dae95.netlify.app/
## Features

- User login
- Persisting user state/session
- Stripe payment integration
- responsive design
- MongoDB backend server database
- Browse products by category
