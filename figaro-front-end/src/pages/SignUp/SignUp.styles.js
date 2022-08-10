import styled from "styled-components";
import LoginBg from "../../assets/login-background.jpg";
import { mobile, largeMobile, tablet } from "../../responsive"
import React, { useState } from 'react';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${LoginBg}) center / cover;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 40%;
`



export const Wrapper = styled.div`
    padding: 1.25rem;
    width: 40%;
    background-color: ${ ({ theme: {secondary} }) => secondary.main};

    ${ mobile({ width: "90%" })};
    ${ largeMobile({ width: "75%" })};
    ${ tablet({ width: "60%" })};

`

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    position: relative;
`

export const Title = styled.h2`
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 300;
`

export const Error = styled.span`
    font-size: 0.85rem;
    color: red;
    padding: 0.1875rem;
    font-weight: 600;

    ${ mobile({ bottom: "160px" })};


    ${ largeMobile({
        bottom: "110px",
        fontSize: "0.75rem"
    })};

    
`

export const Input = styled.input`

    margin: 1.25rem 0.625rem 0 0;
    padding: 0.625rem;
    border: 0.0625rem solid black;


`


export const Agreement = styled.span`
    font-size: 0.75rem;
    margin: 1.25rem 0rem;
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
    
    &:hover {
        background-color: white;
        color: black;

    }
`

export const FormInput = (props) => {

    const [focused, setFocused] = useState(false);

    const { onChange, id, errMsg, ...inputProps } = props;

    const handleFocus = () => {
        setFocused(true);
    }

  return (
    <>
        <InputWrapper>
        
            <Input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString( )}
            />
            {focused && <Error>{errMsg}</Error>}
        </InputWrapper> 
    </>
  )
}

