import React, { useState } from 'react';
import * as S from './styles';
import { NavLink, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import AppContainer from '../../components/AppContainer';
import useReqApi from '../../hooks/useReqApi';
import { GrView } from 'react-icons/gr';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import Modal from '../../components/Modal';
import Head from '../../components/Head';

const Dashboard = () => {
  const { datas, setDatas, loading } = useReqApi('/news/user', true);
  const [modal, setModal] = useState(false);
  const [newsId, setNewsId] = useState(undefined);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    setNewsId(id);
    setModal(true);
  };

  if (loading) return <Loading />;

  return (
    <>
      <Head title="NewsLBS - Dashboard" />
      <S.DashboardContainer>
        <AppContainer>
          <S.DashboardHeader>
            <div>
              <h1>Minhas notícias</h1>
              <p>
                {!datas || datas.length === 0
                  ? 'Você ainda não adicionou notícias.'
                  : 'Veja as notícias que você cadastrou.'}
              </p>
            </div>

            <button onClick={() => navigate('/cadastrar-noticia')}>
              Cadastrar notícia
            </button>
          </S.DashboardHeader>
          <S.DashboardArea>
            {datas &&
              datas.map((data) => (
                <S.DashboardNewsSingle key={data._id}>
                  <S.DashboardNewsInfos>
                    <h2>{data.title}</h2>
                    <span>
                      <strong>Autor:</strong> {data.author}
                    </span>
                    <span>
                      <strong>Categoria:</strong> {data.category}
                    </span>
                  </S.DashboardNewsInfos>

                  <S.DashboardNewsActions>
                    <NavLink
                      title="Visualizar notícia"
                      to={`/noticia/${data._id}`}
                    >
                      <GrView />
                    </NavLink>
                    <NavLink
                      title="Editar notícia"
                      to={`/noticia/editar/${data._id}`}
                    >
                      <AiTwotoneEdit />
                    </NavLink>
                    <NavLink
                      onClick={() => handleDelete(data._id)}
                      title="Deletar notícia"
                    >
                      <AiTwotoneDelete />
                    </NavLink>
                  </S.DashboardNewsActions>
                </S.DashboardNewsSingle>
              ))}
          </S.DashboardArea>
        </AppContainer>
      </S.DashboardContainer>
      <Modal
        title="Você tem certeza que quer deletar esta notícia?"
        paragraph="A notícia será deletada e não poderá ser recuperada novamente."
        modal={modal}
        setModal={setModal}
        datas={datas}
        setDatas={setDatas}
        newsId={newsId}
        deleteNews
      />
    </>
  );
};

export default Dashboard;
