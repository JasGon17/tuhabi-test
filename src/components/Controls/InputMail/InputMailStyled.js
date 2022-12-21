import styled from "styled-components";

export const ContInputMailStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100%;
`
export const FormInMailStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 350px;
    gap: 18px;
    padding: 40px 20px;
    background: #EFF5F5;
    border-radius: 25px;
    opacity: 0.90;
`
export const LabelInputMail = styled.label`
    color: #333;
    font-size: 18px;
    font-weight: 600;
`
export const InputMailStyled = styled.input`
    height: 32px;
    width: 300px;
    padding: 4px 12px;
    border: none;
    border-radius: 20px;
    outline: none;
    letter-spacing: 1.5px;
    font-size: 14px;

`
export const ErrorCont = styled.div`
    height: 15px;
    color: #333;
    font-weight: 600;
`
export const ErrorText = styled.span`
    letter-spacing: 1.5px;
    font-size: 12px;
    color: #EB455F;
`
export const ButtonSubmit = styled.button`
    padding: 10px;
    border-radius: 10px;
    border: none;
    ouline: none;
    background: #7c01ff;
    font-size: 18px;
    letter-spacing: 1.5px;
    : hover{
        color: #fff;
        background: #3a00ca;
    }
    : active{
        background: #7c01ff;
    }
`