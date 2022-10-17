import React from 'react';
import AppContainer from '../../components/AppContainer';
import * as S from './styles';

const NotFound = () => {
  return (
    <S.NotFoundContainer>
      <AppContainer>
        <h1>Página não encontrada!</h1>
      </AppContainer>
    </S.NotFoundContainer>
  );
};

export default NotFound;
