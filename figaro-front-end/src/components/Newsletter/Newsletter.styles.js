import styled from "styled-components";
import { mediumTablet, largeMobile } from "../../responsive";


export const Container = styled.div`
    height: 60vh;
    background-color: ${ ({ theme: {primary} }) => primary.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${ ({ theme: {textCol} }) => textCol.textOnPrim};
`

export const Title = styled.h2`
    font-size: 4.375rem;
    margin-bottom: 1.25rem;
`

export const Desc = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1.25rem;

    ${ mediumTablet({ textAlign: "center" })};
    ${ largeMobile({ padding: "0 10%" })};


`

export const InputContainer = styled.div`
    width: 50%;
    height: 2.5rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${ ({ theme: {secondary} }) => secondary.dark};


    ${ largeMobile({ width: "80%" })};


`

export const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 1.25rem;
`

export const Button = styled.button`
    flex: 1;
    border:none;
    background-color: ${ ({ theme: {secondary} }) => secondary.main};
    cursor: pointer;
`
