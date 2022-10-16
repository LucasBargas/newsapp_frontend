import React from 'react';
import FormNews from '../../components/Form/FormNews';
import AppContainer from '../../components/AppContainer';
import usePostApi from '../../hooks/usePostApi';
import Head from '../../components/Head';

const RegisterNews = () => {
  const { handlePost, postLoading } = usePostApi('/news', '/');

  const handleSubmit = (news) => {
    console.log(news);
    handlePost(news);
  };

  return (
    <>
      <Head title="NewsLBS - Cadastrar notícia" />
      <section>
        <AppContainer>
          <FormNews
            handleSubmit={handleSubmit}
            title="Cadastre uma notícia"
            subtitle="Após o cadastro, a notícia estará disponível para outras pessoas verem."
            btnText={postLoading ? 'Cadastrando...' : 'Cadastrar'}
            loading={postLoading}
          />
        </AppContainer>
      </section>
    </>
  );
};

export default RegisterNews;
