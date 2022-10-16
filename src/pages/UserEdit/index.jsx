import React, { useState } from 'react';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import usePatchApi from '../../hooks/usePatchApi';
import useReqApi from '../../hooks/useReqApi';
import useUserAuthContext from '../../hooks/useUserAuthContexts';
import SubmitButton from '../../components/Form/SubmitButton';
import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

const UserEdit = () => {
  const [modal, setModal] = useState(false);
  const { deleteAccount } = useUserAuthContext();
  const { handlePost, patchLoading } = usePatchApi('/users/edit');
  const { datas, setDatas, loading } = useReqApi('/users/auth-user', true);

  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handlePost(datas);
  };

  if (loading) return <Loading />;

  return (
    <section>
      <AppContainer>
        <S.FormEditUser>
          <h1>Olá, {datas && datas.name}!</h1>
          <p>Fique a vontade e edite sua conta.</p>

          <S.FormEditArea onSubmit={handleSubmit}>
            <Input
              name="name"
              label="Defina um nome para o seu usuário"
              value={(datas && datas.name) || ''}
              handleChange={handleChange}
              placeholder="Defina um nome para o seu usuário..."
            />
            <Input
              name="email"
              label="Email"
              value={(datas && datas.email) || ''}
              handleChange={handleChange}
              placeholder="Exemplo: pedro@gmail.com"
            />
            <Textarea
              name="bio"
              label="Sua bio"
              value={(datas && datas.bio) || ''}
              handleChange={handleChange}
              placeholder="Fale sobre você..."
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              handleChange={handleChange}
              placeholder="Sua senha..."
            />
            <Input
              type="password"
              name="confirmpassword"
              label="Confirme sua senha"
              handleChange={handleChange}
              placeholder="Confirme sua senha..."
            />
            <SubmitButton
              loading={patchLoading}
              btnText={patchLoading ? 'Editando...' : 'Editar'}
            />
          </S.FormEditArea>
          <S.DeleteAccount>
            <p>Quer deletar sua conta?</p>
            <button onClick={() => setModal(true)}>Deletar conta.</button>
          </S.DeleteAccount>
        </S.FormEditUser>
      </AppContainer>

      <Modal
        title={`${
          datas && datas.name
        }, tem certeza que quer deletar sua conta?`}
        paragraph="Ao confirmar esta ação, todos os seus dados serão perdidos, incluindo as notícias postadas por você."
        modal={modal}
        setModal={setModal}
        deleteAccount={deleteAccount}
      />
    </section>
  );
};

export default UserEdit;
