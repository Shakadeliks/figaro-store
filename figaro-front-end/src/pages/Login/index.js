import React, { useState } from 'react'
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    SubmitBtn,
    Link,
    Error
} from "./Login.styles";
import { login } from "../../Redux/userApiCalls"
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector(state=> state.user)

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, {
            email,
            password
        });

    }

  return (
    <Container>
        <Wrapper>
            <Title>
                LOGIN
            </Title>
            <Form>
                <Input placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                <Input placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                <SubmitBtn onClick={handleLogin} disabled={isFetching}>login</SubmitBtn>
                {error && <Error>Something went wrong...</Error>}
                <Link>forgot password?</Link>
                <Link>create new account</Link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login;