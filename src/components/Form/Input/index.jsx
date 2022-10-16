import React from 'react';
import * as S from './styles';

const Input = ({ type, name, label, value, handleChange, placeholder }) => {
  return (
    <S.InputContainer>
      <label htmlFor={name}>{label}*</label>
      <input
        type={type ? type : 'text'}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </S.InputContainer>
  );
};

export default Input;
