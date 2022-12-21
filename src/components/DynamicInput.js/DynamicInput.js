import React from 'react';
import PropTypes from 'prop-types';

import InputText from '../Controls/InputText/InputText';
import InputNumber from '../Controls/InputNumber/InputNumber';
import InputMoney from '../Controls/InputMoney/InputMoney';
import InputChek from '../Controls/InputCheck/InputCheck';
import InputSelect from '../Controls/InputSelect/InputSelect';
import InputImage from '../Controls/InputImage/InputImage';
import InputMail from '../Controls/InputMail/InputMail';

const DynamicInput = ({ type, show, ...props }) => {
  const TYPES = {
    check: InputChek,
    image: InputImage,
    email: InputMail,
    money: InputMoney,
    number: InputNumber,
    option: InputSelect,
    text: InputText,
  };
  if (!show) return null;
  const Input = TYPES[type] || TYPES.text;
  return <Input {...props} type={type} />;
};

DynamicInput.defaultProps = {
  type: 'text',
  show: true,
};

DynamicInput.propTypes = {
  type: PropTypes.oneOf([
    'check',
    'image',
    'email',
    'money',
    'number',
    'option',
    'text',
  ]),
  show: PropTypes.bool,
};

export default DynamicInput;