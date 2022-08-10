import styled from "styled-components";
import { mobile, mediumTablet } from "../../responsive";


export const Container = styled.div`
    flex: 1;
    margin: 0.188rem;
    height: 70vh;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${ mobile({ height: "30vh" })}
    ${ mediumTablet({ height: "50vh" })}

`

export const Title = styled.h2`
    
    color:${ ({ theme: {textCol} }) => textCol.textOnPrim};
    text-transform: uppercase;
    margin-bottom: 1.25rem;
    font-size: 2.2rem;
    letter-spacing: 4px;
`

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    
    border: none;
    padding: 0.625rem;
    background-color: ${ ({ theme: {secondary} }) => secondary.main};
    cursor: pointer;
    color: ${ ({ theme: {textCol} }) => textCol.textOnSec};
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
`