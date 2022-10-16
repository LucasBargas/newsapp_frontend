import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormNews from '../../components/Form/FormNews';
import AppContainer from '../../components/AppContainer';
import Loading from '../../components/Loading';
import usePatchApi from '../../hooks/usePatchApi';
import useReqApi from '../../hooks/useReqApi';

const NewsEdit = () => {
  const { id } = useParams();
  const { datas, loading } = useReqApi(`/news/unique/${id}`);
  const { handlePost, patchLoading } = usePatchApi(
    `/news/${id}`, // api route
    `/noticia/${id}`, // navigate path if the post ok
  );

  const handleSubmit = async (datas) => {
    handlePost(datas);
  };

  if (loading) return <Loading />;

  return (
    <section>
      <AppContainer>
        <FormNews
          newsData={datas}
          handleSubmit={handleSubmit}
          title={`Atualize a notícia: ${datas && datas.title}`}
          btnText={patchLoading ? 'Atualizando...' : 'Atualizar'}
          loading={patchLoading}
        />
      </AppContainer>
    </section>
  );
};

export default NewsEdit;
