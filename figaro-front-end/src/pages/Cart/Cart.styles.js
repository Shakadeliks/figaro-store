import styled from "styled-components"
import { mobile, mediumTablet } from "../../responsive"


export const Container = styled.div`

`

export const Wrapper = styled.div`
    padding: 1.25rem;

    ${ mediumTablet({ padding: "0.625rem" })};

`

export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
`

export const Top = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 1.25rem;
`

export const TopBtn = styled.button`
    padding: 0.625rem;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" ? "none" : "1px solid black"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    text-transform: uppercase;
    

`

export const TopInfo = styled.div`
    ${ mediumTablet({ display: "none" })};

    
`

export const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 0.625rem;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${ mediumTablet({ flexDirection: "column" })};


`

export const ProductInfo = styled.div`
    flex: 3;
    
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${ mediumTablet({ flexDirection: "column" })};

`

export const ProductDetails = styled.div`
    flex: 2;
    display: flex;

    ${ mediumTablet({ flexDirection: "column" })};

`

export const RemoveImgContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    
`


export const Image = styled.img`
    width: 12.5rem;
`

export const RemoveBtn = styled.button`
    width: 80%;
    margin-top: 1rem;
    padding: 0.625rem;
    border: none;
    text-transform: uppercase;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;

    ${ mediumTablet({ width: "50%" })};

`


export const Details = styled.div`
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    ${ mediumTablet({ alignItems: "center" })};

`

 
export const ProductName = styled.span`
    text-transform: capitalize;
`


export const ProductSize = styled.span``


export const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
`

export const ProductAmount = styled.div`
    font-size: 1.5rem;
    margin: 0.3125rem;
    ${ mobile({ margin: "0.3125rem 0.9375rem" })};

`

export const ProductPrice = styled.div`
    font-size: 1.875rem;
    font-weight: 400;
    ${ mobile({ marginBottom: "1.25rem" })};

`

export const Break = styled.hr`
    background-color: white;
    border: none;
    height: 0.0625rem;
`

export const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    height: 50vh;
    padding: 1.25rem;

`

export const SummaryTitle = styled.h1`
    font-weight: 200;
    text-transform: capitalize;
`;

export const SummaryItem = styled.div`
    margin: 1.875rem 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" ? "500" : "400"};
    font-size: ${ props => props.type === "total" && "1.5rem"};
    text-transform: capitalize;
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const SummaryBtn = styled.button`
    width: 100%;
    padding: 0.625rem;
    border: none;
    text-transform: uppercase;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;


