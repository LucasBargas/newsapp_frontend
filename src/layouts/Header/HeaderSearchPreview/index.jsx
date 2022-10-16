import React from 'react';
import * as S from './styles';
import { NavLink } from 'react-router-dom';
import useReqApi from '../../../hooks/useReqApi';
import { IoClose } from 'react-icons/io5';

const HeaderSearchPreview = ({ input, setOpened, closePreview, ...props }) => {
  const { datas, reqError, loading } = useReqApi(`/news/${input}`);

  const handleClosePreview = () => {
    closePreview();
    setOpened(false);
  };

  if (loading)
    return (
      <S.HeaderSearchPreviewContainer {...props}>
        <p>Procurando...</p>
      </S.HeaderSearchPreviewContainer>
    );

  if (reqError)
    return (
      <S.HeaderSearchPreviewContainer {...props}>
        <S.HeaderSearchPreviewErr>{reqError}</S.HeaderSearchPreviewErr>
        <S.HeaderSearchPreviewCloseBtn onClick={() => closePreview()}>
          <IoClose />
        </S.HeaderSearchPreviewCloseBtn>
      </S.HeaderSearchPreviewContainer>
    );

  return (
    <S.HeaderSearchPreviewContainer {...props}>
      <ul>
        {datas &&
          datas.map((data) => (
            <li key={data._id}>
              <NavLink onClick={handleClosePreview} to={`/noticia/${data._id}`}>
                {data.title}
              </NavLink>
            </li>
          ))}
      </ul>

      <S.HeaderSearchPreviewCloseBtn onClick={() => closePreview()}>
        <IoClose />
      </S.HeaderSearchPreviewCloseBtn>
    </S.HeaderSearchPreviewContainer>
  );
};

export default HeaderSearchPreview;
