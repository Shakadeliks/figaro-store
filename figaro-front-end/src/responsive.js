import { css } from "styled-components";

//shortcut functions that returns media query for the relevant breakpoint to be used in styled components, saves having to rewrite the media query syntax for every component
export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 480px) {
            ${props}
        }
    `
}

export const largeMobile = (props) => {
    return css`
        @media only screen and (max-width: 600px) {
            ${props}
        }
    `
}


export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 1360px) {
            ${props}
        }
    `
}

export const mediumTablet = (props) => {
    return css`
        @media only screen and (max-width: 1024px) {
            ${props}
        }
    `
}


export const mediumDesktop = (props) => {
    return css `
        @media only screen and (min-width: 1280px) {
            ${props}
        }
    `
}

