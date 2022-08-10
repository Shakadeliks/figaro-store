import React from 'react'
import { Container } from './Categories.styles';
import { productCategories } from "../../data";
import CategoryCard from '../CategoryCard';

const Categories = () => {
  return (
    <Container>
        {productCategories.map(item => (
            <CategoryCard item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories;