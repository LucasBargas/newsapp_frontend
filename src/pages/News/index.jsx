import React, { useState } from 'react';
import * as S from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import useReqApi from '../../hooks/useReqApi';
import api from '../../utils/api';
import AppContainer from '../../components/AppContainer';
import NewsCard from '../../components/NewsCard';
import Loading from '../../components/Loading';
import Head from '../../components/Head';

const News = () => {
  const [pageTitle] = useState('NewsLBS - Notícia');
  const { id } = useParams();
  const { datas, loading } = useReqApi(`/news/unique/${id}`);
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (window.confirm('Você tem certeza que apagar esta notícia?')) {
      try {
        api.delete(`/news/${id}`).then((response) => {
          return response.data;
        });
      } catch (error) {
        return error;
      }
      navigate('/');
    }
  };

  if (loading) return <Loading title={pageTitle} />;

  return (
    datas && (
      <>
        <Head title={`${pageTitle} - ${datas.title}`} />
        <S.NewsContainer>
          <AppContainer>
            <NewsCard
              title={datas.title}
              body={datas.body}
              category={datas.category}
              author={datas.author}
              id={datas._id}
              handleClick={() => handleClick(datas._id)}
            />
          </AppContainer>
        </S.NewsContainer>
      </>
    )
  );
};

export default News;
