import styled from "styled-components";
import LoginBg2 from "../../assets/login-background2.jpg";
import { mobile, tablet, largeMobile } from "../../responsive"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${LoginBg2}) center / cover;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    padding: 1.25rem;
    width: 25%;
    background-color: ${ ({ theme: {secondary} }) => secondary.main};

    ${ mobile({ width: "80%" })};
    ${ largeMobile({ width: "75%" })};
    ${ tablet({ width: "60%" })};

    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 300;
`

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 0.625rem 0 ;
    padding: 0.625rem;
    border: 0.0625rem solid black;
`

export const SubmitBtn = styled.button`
    width: 40%;
    border: none;
    padding: 0.9375rem 1.25rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.35s ease-in-out;
    margin-bottom: 0.625rem;

    &:disabled{
        background-color: gray;
        cursor: not-allowed;
    }

    &:hover {
        background-color: white;
        color: black;

    }
`

export const Error = styled.span`
    color: red;
`

export const Link = styled.a`
    margin: 0.3125rem 0;
    font-size: 0.75rem;
    cursor: pointer;
    text-decoration: underline;
`
