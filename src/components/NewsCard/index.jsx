import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import { GrView } from 'react-icons/gr';

const NewsCard = ({
  title,
  body,
  category,
  author,
  id,
  accessBtn,
  ...props
}) => {
  return (
    <S.NewsCardContainer {...props}>
      <h3>{title}</h3>
      <p>{body}</p>
      <S.NewsInfo>
        <div>
          <p>
            <strong>Categoria:</strong> <span>{category}</span>
          </p>
          <p>
            <strong>Autor(a):</strong> <span>{author}</span>
          </p>
        </div>
      </S.NewsInfo>
      <S.NewsActionsBtn>
        {accessBtn && (
          <NavLink title="Visualizar notícia" to={`/noticia/${id}`}>
            <GrView />
          </NavLink>
        )}
      </S.NewsActionsBtn>
    </S.NewsCardContainer>
  );
};

export default NewsCard;
