import { SendRounded } from '@material-ui/icons';
import React from 'react';
import {
    Container,
    Title,
    Desc,
    InputContainer,
    Input,
    Button
} from './Newsletter.styles'

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Stay up to date with the latest drops we have in store for you.</Desc>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <SendRounded />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter;