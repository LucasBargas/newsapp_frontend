import React from 'react';
import * as S from './styles';

const SubmitButton = ({ btnText, loading }) => {
  return (
    <S.SubmitButtonContainer>
      <button disabled={loading}>{btnText}</button>
    </S.SubmitButtonContainer>
  );
};

export default SubmitButton;
