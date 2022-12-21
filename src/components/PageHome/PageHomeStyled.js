import styled from "styled-components";
import Link from "next/link";

export const HomePageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 100%;
`
export const SaleBtn = styled(Link)`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 200px;
    padding: 8px;
    border-radius: 8px;
    background: #b64dff;
    border: none;
    outline: none;
    font-size: 32px;
    color: #fff;
    font-weight: 600;
    : hover{
        color: #fff;
        background: #3a00ca;
    }
    : active{
        background: #b64dff;
    }
`