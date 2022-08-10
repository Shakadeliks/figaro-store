import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Agreement,
    SubmitBtn,
    Error,
    InputWrapper
} from "./SignUp.styles";
import useForm from "./useForm";
import validate from "./validateInfo";
import { useSelector } from 'react-redux';

const SignUp = () => {

    const { onChange, values, handleSubmit, errors } = useForm(validate);
    const { isFetching } = useSelector(state => state.user);
    

  return (
    <Container>
        <Wrapper>
            <Title>
                create an account
            </Title>
            <Form onSubmit={handleSubmit}>
                
                <InputWrapper>

                    <Input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={onChange}
                    />
                    
                </InputWrapper>
                <InputWrapper>

                    <Input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={onChange}
                    />
                    
                </InputWrapper>
                <InputWrapper>

                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={onChange}
                    />
                    {errors.email && <Error>{errors.email}</Error>}
                </InputWrapper>
                <InputWrapper>

                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={onChange}
                    />
                    {errors.password && <Error>{errors.password}</Error>}
                </InputWrapper>
                <InputWrapper>

                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={onChange}
                    />
                    {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
                </InputWrapper>
                    
                
                
                
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <SubmitBtn type='submit' disabled={isFetching}>create</SubmitBtn>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default SignUp;