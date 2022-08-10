import React from 'react'
import {
    Left,
    Container,
    Center,
    Right,
    Desc,
    SocialContainer,
    SocialIcon,
    Title,
    List,
    ListItem,
    ContactItem,
    Payment } from './Footer.styles';
import {Logo } from '../Navbar/Navbar.styles'
import {
    Pinterest,
    Twitter,
    Instagram,
    FaceRounded,
    RoomOutlined,
    PhoneOutlined,
    MailOutlined} from '@material-ui/icons';
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                figaro
            </Logo>
            <Desc>
                Caerphilly airedale cheese slices. Cheeseburger pecorino monterey jack cheesy grin cheesecake taleggio cheese triangles airedale.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FaceRounded />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Hats</ListItem>
                <ListItem>T-Shirts</ListItem>
                <ListItem>Pants</ListItem>
                <ListItem>Sneakers</ListItem>
                <ListItem></ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomOutlined style={{marginRight: "0.625rem"}}/>
                187 Trill Street, Jiggyville, 10254
            </ContactItem>
            <ContactItem>
                <PhoneOutlined style={{marginRight: "0.625rem"}}/>
                +29 44 751 2285
            </ContactItem>
            <ContactItem>
                <MailOutlined style={{marginRight: "0.625rem"}}/>
                contact@figaro.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/> 
        </Right>
    </Container>
  )
}

export default Footer;