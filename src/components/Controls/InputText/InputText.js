import React, { useState } from "react";
import PropTypes from 'prop-types';

import ToolTipComponent from '../../ToolTipComponent/ToolTipComponent'
import { InputTextStyled, LabelContInputText, LabelInputText } from "./InputTextStyle";

const InputText = ({name, Label, register, value, tooltip}) =>{

    const [internalValue, setInternalValue] = useState(value);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInternalValue(newValue);
        updateValue(newValue, name, 'name');
      };
    return(
        <LabelContInputText>
            <LabelInputText htmlFor={name}>{Label}
                <InputTextStyled 
                    id={name}
                    type='text'
                    name={name}
                    value={internalValue}
                    {...register}
                    onChange={(event) => handleChange(event)}
                    />
            </LabelInputText>
            <ToolTipComponent tooltip={tooltip}/>
        </LabelContInputText>
        
    )
}
export default InputText;

InputText.defaultProps = {
    Label: 'Dato del cliente',
    name: 'name',
}

InputText.propTypes = {
    Label: PropTypes.string,
    name: PropTypes.string,
}