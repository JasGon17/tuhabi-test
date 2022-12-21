import styled from "styled-components";

export const ToolTipContStyled = styled.div`
    margin-top: 8px;
    margin-left: 8px;
    position: absolute;
    right: 50px;

    @media (min-width: 768px) {
        position: relative;
        right: 0px;
      }
`
export const ToolTipTextStyled = styled.p`
    background: #7c01ff;
    padding: 12px;
    margin: 0px;
    border-radius: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    width: 200px;
    position: absolute;
    right: 0px;

    @media (min-width: 768px) {
        position: relative;
      }
`