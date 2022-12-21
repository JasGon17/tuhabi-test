import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonSubmit, ContInputMailStyled, ErrorCont, ErrorText, FormInMailStyled, InputMailStyled, LabelInputMail } from "./InputMailStyled";

const InputMail = ({name, Label,nextPage}) =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inputVal, setInputVal] = useState(false);
    const router = useRouter();
    const onSubmit = (data) => {
        console.log(data);
        router.push(`${nextPage}`);
    }
    return(
        <ContInputMailStyled>
            <FormInMailStyled onSubmit={handleSubmit(onSubmit)}>
                <LabelInputMail htmlFor="email">{Label}</LabelInputMail>
                <InputMailStyled id="email" {...register('email', { required: true, matches: /^\S+@\S+$/i, string: true})} />
                <ErrorCont>
                   {errors.email && errors.email.type === "required" && <ErrorText>E-Mail necesario para continuar.</ErrorText>}
                   {errors.email && errors.email.type === "matches" && <ErrorText>Formato invalido.</ErrorText>}
                </ErrorCont>
                <ButtonSubmit type="submit">Continuar</ButtonSubmit>
            </FormInMailStyled>
        </ContInputMailStyled>
    )
}
export default InputMail;

InputMail.defaultProps = {
    Label: 'E-Mail:',
    name: 'e-mailCliente'
}

InputMail.propTypes = {
    Label: PropTypes.string,
    name: PropTypes.string,
}