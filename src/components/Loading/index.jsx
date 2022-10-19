import React from 'react';
import Head from '../Head';
import * as S from './styles';

const Loading = ({ title = false }) => {
  return (
    <>
      {title && <Head title={title} />}
      <S.LoadingContainer></S.LoadingContainer>
    </>
  );
};

export default Loading;
