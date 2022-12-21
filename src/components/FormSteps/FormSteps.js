import { useRouter } from "next/router";
import React from "react";
import ButtonUI from "../ButtonUI/ButtonUI";
import DynamicInput from "../DynamicInput.js/DynamicInput";
import ToolTipComponent from "../ToolTipComponent/ToolTipComponent";
import { ContInputTextStyled, FormStepsStyled, type, label } from "./formStepsStyle";

const FormSteps = ({name, placeholder, type, label, tooltip}) =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit = (data) => {
        console.log(data);
        router.push(nextPage)
    }
    return(
        <ContInputTextStyled>
            <FormStepsStyled register onSubmit={handleSubmit(onSubmit)}>
              <DynamicInput
              placeholder={placeholder}
              name={name}
              type={type}
              key={name}
              label={label}
              register={register(name)}
              updateValue={handleUpdate}
              tooltip={tooltip}
              show={!condition || showAnnualDividend}
            />
            <ButtonUI type="submit" onClick={() =>{onSubmit()}}>Continuar</ButtonUI>
            </FormStepsStyled>
        </ContInputTextStyled>
    )
}
export default FormSteps;