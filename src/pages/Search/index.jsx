import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import Loading from '../../components/Loading';
import Showcase from '../../components/Showcase';
import NoNews from '../../components/NoNews';
import useReqApi from '../../hooks/useReqApi';
import Head from '../../components/Head';

const Search = () => {
  const [pageTitle] = useState('NewLBS - Search');
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const { datas, reqError, loading } = useReqApi(
    search ? `/news/search${search}` : '/news',
  );

  if (loading) return <Loading title={pageTitle} />;

  if (reqError)
    return (
      <>
        <Head title={`${pageTitle} - ${reqError}`} />
        <S.SearchContainer>
          <AppContainer>
            <h1>{reqError}</h1>
          </AppContainer>
        </S.SearchContainer>
      </>
    );

  if (!datas || datas.length === 0)
    return (
      <>
        <Head title={pageTitle} />
        <NoNews />
      </>
    );

  return (
    datas && (
      <>
        <Head
          title={
            query.get('q') ? `${pageTitle} - ${query.get('q')}` : `${pageTitle}`
          }
        />
        <S.SearchContainer>
          {search && (
            <AppContainer>
              <h1>Notícias encontradas com: {query.get('q')}</h1>
            </AppContainer>
          )}
          <Showcase datas={datas} accessBtn />;
        </S.SearchContainer>
      </>
    )
  );
};

export default Search;
