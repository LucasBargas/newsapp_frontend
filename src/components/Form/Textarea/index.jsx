import React from 'react';
import * as S from './styles';

const Textarea = ({ name, label, value, handleChange, placeholder }) => {
  return (
    <S.TextareaContainer>
      <label htmlFor={name}>{label}*</label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows="5"
      />
    </S.TextareaContainer>
  );
};

export default Textarea;
