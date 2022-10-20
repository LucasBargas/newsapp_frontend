import React from 'react';
import AppContainer from '../../components/AppContainer';
import Head from '../../components/Head';
import * as S from './styles';

const NotFound = () => {
  return (
    <>
      <Head title="NewsLBS - Página não encontrada!" />
      <S.NotFoundContainer>
        <AppContainer>
          <h1>Página não encontrada!</h1>
        </AppContainer>
      </S.NotFoundContainer>
    </>
  );
};

export default NotFound;
