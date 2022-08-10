import React, { useState } from 'react'
import {
    Container,
    Title,
    FilterContainer,
    Filter, 
    FilterText,
    Select,
    Option} from "./ProductList.styles"
import Navbar from "../../components/Navbar"
import Products from '../../components/Products'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import { useLocation } from "react-router-dom"

const ProductList = () => {

    const location = useLocation();// hook returns the location object that represents the current URL.
    const categ = location.pathname.split("/")[2]
    const [sort, setSort ] = useState("newest");

    const CategoryTitle = (category) => {
        switch(category) {
            case "tshirts":
                return "T-Shirts";
            case "hats":
                return "Hats";
            case "sneakers":
                return "Sneakers";
            case "pants":
                return "Pants"
            default:
        }
    }

  return (
    <Container>
        <Navbar />
        <Title>{ CategoryTitle(categ)}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    sort products:
                </FilterText>
                <Select onChange={ e => setSort(e.target.value) } >
                    <Option value="newest">Newest</Option>
                    <Option value="highest">Price (highest)</Option>
                    <Option value="lowest">Price (lowest)</Option>

                </Select>
            </Filter>
        </FilterContainer>
        <Products categ={categ} sort={sort}/>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList;