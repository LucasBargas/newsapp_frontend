import React from 'react';
import * as S from './styles';
import { NavLink } from 'react-router-dom';
import AppContainer from '../../components/AppContainer';

const Footer = () => {
  return (
    <S.FooterContainer>
      <AppContainer>
        <S.FooterWrapper>
          <p>
            Esta aplicação web foi desenvolvida por{' '}
            <a
              target="_blank"
              href="https://projetoslucasbargas.vercel.app/"
              rel="noopener noreferrer"
            >
              Lucas Bargas
            </a>{' '}
            com base em um design encontrado na web. Porém, toda a codificação é
            própria.
          </p>

          <div>
            <a
              href="https://github.com/LucasBargas/newslbs_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui para visualizar o repositório do Front End no GitHub
            </a>
            <a
              href="https://github.com/LucasBargas/newslbs_backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui para visualizar o repositório do Backend no GitHub
            </a>
          </div>
        </S.FooterWrapper>
      </AppContainer>
    </S.FooterContainer>
  );
};

export default Footer;
