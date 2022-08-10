import styled from "styled-components";
import { largeMobile, mediumDesktop } from "../../responsive"

export const Container = styled.nav`
 
    background-color: ${ ({ theme: {primary} }) => primary.main};// syntax to destructure theme props object to avoid repitition
    height: 3.75rem;
    color: white;
    position: relative;

`
export const NavB = styled.div`
    padding: 0.6rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: auto;
    max-width: calc(61rem + 1.5rem);

    ${mediumDesktop({
        maxWidth: "calc(1200px + 24px)"
    })}

     
`

export const BackgroundOverlay = styled.div`

    ${ largeMobile({ 

        display: ({ isNavOpen }) => isNavOpen ? "block" : "none", 
        position: "fixed", 
        top: 0, 
        right: 0, 
        bottom: 0, 
        left: 0, 
        backgroundColor: "rgba(0, 0, 0, 0.70)",
        zIndex: 98,
        width: "100vw",
        height: "100vh",
        transition: "display 0.3s ease-in-out"
        })}

`

export const HamburgerContainer = styled.div`
    display: none;

   ${ largeMobile({
       display: "block",
       cursor: "pointer",

   })}
`

export const LogoCont = styled.div`
   
`

export const MobileCartContainer = styled.div`
    display: none;

    ${ largeMobile({
        display: "block",
        cursor: "pointer",

    })}
`

export const Logo = styled.h1`
    cursor: pointer;
    margin: 0;
    font-family: 'Eagle Lake', cursive;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 2rem;


`

export const RightCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${ largeMobile({
        backgroundColor: ({ theme: {primary} }) => primary.main,
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: ({ isNavOpen }) => isNavOpen ? 0 : "-100%",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        width: "60vw",
        justifyContent: "space-around",
        transition: "left 0.3s ease-in-out"
    })}
`

export const CloseBtnContainer = styled.div`
    display: none;

    ${ largeMobile({ display: "block"})}

`

export const MenuItem = styled.div`
    cursor:${props => !props.user && "pointer"};
    margin-left: 1.5rem;
    display: ${ props => props.closeBtn === "true" && "none"};

    ${ largeMobile({
        display:  props => props.closeBtn === "true" && "block", 
        padding: "1.3rem 0.8rem", 
        fontSize: "1.2rem"
    })}


`