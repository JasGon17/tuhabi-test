import React from "react";
import { ButtonUIStyled } from "./ButtonUIStyled";

const ButtonUI = (children, type, onClick) =>{
    return(
        <ButtonUIStyled onClick={() => onClick()} type={type}>{children}</ButtonUIStyled>
    )
}
export default ButtonUI;