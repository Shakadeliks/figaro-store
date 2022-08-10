import styled from 'styled-components';

export const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: yellow;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.1);

    transition: all 0.5s ease;
    cursor: pointer;
`

export const Container = styled.div`
    flex: 1;
    margin: 0.313rem;
    min-width: 17.5rem;
    height: 21.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

export const Circle = styled.div`
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
    background-color: grey;
    position: absolute;
`

export const Image = styled.img`
    height: 75%;
    z-index: 2;
`



export const Icon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.625rem;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        background-color: ${ ({ theme: {secondary} }) => secondary.main};
        transform: scale(1.1);
    }
`
