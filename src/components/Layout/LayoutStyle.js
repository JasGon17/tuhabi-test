import styled from "styled-components";

export const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("apartment-01.jpeg");
    background-size: cover;
    background-position: center top;
    height: 100vh;
    width: 100%;
    
`
export const LayoutContStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const TitleHomePage = styled.h1`
    background: #7c01ff;
    width: fit-content;
    opacity: 0.9;
    padding: 12px;
    border-radius: 12px;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 24px;
`
export const LoaderBar = styled .div`
    display: flex;
    flex-direction; row;
    justify-content: flex-start;
    width: 80%;
    height: 24px;
    border: solid 2px #3a00ca;
    margin: 12px;
`
export const LoaderBarStyled = styled.div`
    background: #3a00ca;
    width: ${({Step}) => Step ? `${Step}%` : '0%'};
    height: 20px;
    margin: 0px;
`
export const ContLoaderBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 66px;
`
export const TextStyled = styled.span`
    color: #333;
    font-weight: 600;
    font-size: 16px;
`
