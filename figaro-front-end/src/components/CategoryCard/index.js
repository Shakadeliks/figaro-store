import React from 'react'
import {
    Container,
    Image,
    Info,
    Title,
    Button,
     } from './CategoryCard.style';
import { Link } from "react-router-dom"

const CategoryCard = ({ item }) => {
  return (
    <Link to={`/products/${item.categ}`}>
      <Container>
          <Image src={ item.img }/>
          <Info>
              <Title>{ item.title }</Title>
              <Button>shop now</Button>
          </Info>
      </Container>
    </Link>
  )
}

export default CategoryCard;