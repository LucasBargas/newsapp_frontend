import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import useUserAuthContext from '../../hooks/useUserAuthContexts';
import AppContainer from '../AppContainer';

const NoNews = () => {
  const { authenticated } = useUserAuthContext();

  return (
    <S.NoNewsContainer>
      <AppContainer>
        <h1>Não há notícias cadastradas!</h1>
        {!authenticated && (
          <>
            <p>Seja o primeiro a adicionar uma notícia.</p>
            <p>
              Clique aqui e <NavLink to="/entrar">entre em sua conta</NavLink>{' '}
              ou <NavLink to="/cadastrar">cadastre-se</NavLink> agora mesmo.
            </p>
          </>
        )}

        {authenticated && (
          <>
            <p>Seja o primeiro a adicionar uma notícia.</p>
            <p>
              É só{' '}
              <NavLink to="/cadastrar-noticia">clicar aqui e cadastrar</NavLink>
              .
            </p>
          </>
        )}
      </AppContainer>
    </S.NoNewsContainer>
  );
};

export default NoNews;
