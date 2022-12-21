import React from "react";
import { HomePageStyled, SaleBtn } from "./PageHomeStyled";

const PageHome = ({link}) =>{
    return(
        <HomePageStyled>
                <SaleBtn href={link}>Vender</SaleBtn>
        </HomePageStyled>
    )
}
export default PageHome;