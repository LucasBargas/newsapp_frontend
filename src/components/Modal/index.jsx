import React, { useState } from 'react';
import * as S from './styles';
import { IoClose } from 'react-icons/io5';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import useFlashMessages from '../../hooks/useFlashMessages';

const Modal = ({
  title,
  paragraph,
  modal,
  setModal,
  datas,
  setDatas,
  newsId,
  deleteNews,
  deleteAccount,
}) => {
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessages();

  const handleClick = (e) => {
    if (e.target === e.currentTarget) setModal(false);
  };

  const handleDelete = async () => {
    setModal(false);
    let msgType = 'success';

    const data = await api
      .delete(`/news/${newsId}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('apiToken') || '',
          )}`,
        },
      })
      .then((response) => {
        setDatas(datas.filter((data) => data._id !== newsId));
        navigate('/minhas-noticias');
        return response.data;
      })
      .catch((err) => {
        msgType = 'error';
        return err.response.data;
      });
    setFlashMessage(data.message, msgType);
  };

  return (
    <S.ModalContainer onClick={handleClick} modal={modal}>
      <S.ModalArea>
        <S.ModalClose>
          <button onClick={() => setModal(false)}>
            <IoClose />
          </button>
        </S.ModalClose>

        <S.ModalContent>
          <h2>{title}</h2>
          <p>{paragraph}</p>

          <S.ModalActions>
            {deleteNews && <button onClick={handleDelete}>Confirmar</button>}
            {deleteAccount && (
              <button onClick={deleteAccount}>Confirmar</button>
            )}
            <button onClick={() => setModal(false)}>Cancelar</button>
          </S.ModalActions>
        </S.ModalContent>
      </S.ModalArea>
    </S.ModalContainer>
  );
};

export default Modal;
