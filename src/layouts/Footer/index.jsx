import React from 'react';
import * as S from './styles';
import { NavLink } from 'react-router-dom';
import AppContainer from '../../components/AppContainer';

const Footer = () => {
  return (
    <S.FooterContainer>
      <AppContainer>
        <div>
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

          <a
            href="https://github.com/LucasBargas/newsapp_frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para visualizar o repositório no GitHub
          </a>
        </div>
      </AppContainer>
    </S.FooterContainer>
  );
};

export default Footer;
