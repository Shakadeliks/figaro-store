import styled from 'styled-components';
import { mobile, mediumTablet } from "../../responsive";


export const Container = styled.div`
    display: flex;
    background-color: ${ ({ theme: {secondary} }) => secondary.main};

    ${ mobile({ flexDirection: "column" })};

`

export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
`

export const Right = styled.div`
   flex: 1;
   padding:  1.25rem;

`

export const Center = styled.div`
   flex: 1;
   padding:  1.25rem;

   ${ mediumTablet({ display: "none" })};
   
`

export const Title = styled.h3`
    margin-bottom: 1.875rem;
`
export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 0.625rem;
`

export const Desc = styled.p`
    margin: 1.25rem 0;
`

export const SocialContainer = styled.div`
    display: flex;
`

export const SocialIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: white;
    background-color: #${ props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.25rem;
`

export const ContactItem = styled.div`
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
`

export const Payment = styled.img`
    width: 50%;
`

