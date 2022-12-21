import React from "react";
import { ContLoaderBar, LayoutContStyled, LayoutStyled, LoaderBar, LoaderBarStyled, TextStyled, TitleHomePage } from "./LayoutStyle";

const Layout = ({children, title, paso}) =>{
    const Step = paso * 10;
    return(
        <LayoutStyled title={title}>
                <TitleHomePage>TUHABI</TitleHomePage>
            <ContLoaderBar>
                {paso && 
                    <ContLoaderBar>
                        <LoaderBar>
                            <LoaderBarStyled Step={Step}/>
                        </LoaderBar>
                        <TextStyled>Paso: {paso}/10</TextStyled>
                    </ContLoaderBar>
                }
            </ContLoaderBar>
            <LayoutContStyled> 
                {children}
            </LayoutContStyled>
        </LayoutStyled>
    )
}

export default Layout;