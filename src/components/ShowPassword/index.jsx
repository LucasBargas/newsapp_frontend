import React from 'react';
import * as S from './styles';

const ShowPassword = ({ setShowPassword, showPassword }) => {
  return (
    <S.ShowPasswordContainer>
      <label>
        <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
        Visualizar senha.
      </label>
    </S.ShowPasswordContainer>
  );
};

export default ShowPassword;
