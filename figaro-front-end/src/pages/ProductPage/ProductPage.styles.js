import styled from "styled-components"
import { mobile, largeMobile, mediumTablet } from "../../responsive"

export const Container = styled.div`

`

export const Wrapper = styled.div`
    padding: 3.125rem;
    display: flex;

    ${ mediumTablet({ padding: "0.625rem", flexDirection: "column" })};

`

export const ImgContainer = styled.div`
    flex: 1;
`

export const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${ mobile({ height: "40vh" })};
    ${ mediumTablet({ height: "60vh" })};


`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0rem 3.125rem;

    ${ largeMobile({ padding: "0.625rem" })};

`

export const Title = styled.h2`
    font-weight: 200;
    text-transform: uppercase;
`

export const Desc = styled.p`
    margin: 1.25rem 0rem;
`

export const Price = styled.span`
    font-weight: 100;
    font-size: 2.5rem;
`

export const FilterContainer = styled.div`
    width: 50%;
    margin: 1.875rem 0rem;

    ${ mobile({ width: "100%" })};

`

export const Filter = styled.div`
    display: flex;
    align-items: center;
`

export const FilterTitle = styled.span`
    font-size: 1.25rem;
    text-transform: capitalize;
`

export const FilterSize = styled.select`
    margin-left: 0.625rem;
    padding: 0.3125rem;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
`

export const FilterSizeOption = styled.option`
    color: black;

`

export const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    ${ mobile({ width: "100%" })};


`

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0rem 0.3125rem;
`

export const AddToCartBtn = styled.button`
    padding: 0.9375rem;
    border: 1px solid black;
    background-color: white;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${ ({ theme: {secondary} }) => secondary.main};
    }
`







