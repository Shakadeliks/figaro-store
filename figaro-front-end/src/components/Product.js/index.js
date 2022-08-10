import { FavoriteRounded, SearchRounded } from '@material-ui/icons';
import React from 'react'
import {
    Container,
    Image,
    Info,
    Icon, } from './Product.style';
import { Link } from "react-router-dom"    

const Product = ({ item }) => {
  return (
    <Container key={item._id}>
        <Image src={item.img} />
        
            <Info>
            
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchRounded style={{ color: "black" }} />
                    </Link>    
                </Icon>
                <Icon>    
                    <FavoriteRounded />
                </Icon>
            </Info>
    </Container>
  )
}

export default Product;