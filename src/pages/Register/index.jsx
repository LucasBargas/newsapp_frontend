import React from 'react';
import FormAuth from '../../components/Form/FormAuth';
import AppContainer from '../../components/AppContainer';
import useUserAuthContext from '../../hooks/useUserAuthContexts';
import Head from '../../components/Head';

const Register = () => {
  const { loading, register } = useUserAuthContext();

  const handleSubmit = async (user) => {
    register(user);
    console.log(user);
  };

  return (
    <>
      <Head title="NewsLBS - Cadastrar" />
      <section>
        <AppContainer>
          <FormAuth
            handleSubmit={handleSubmit}
            title="Cadastrar"
            subtitle="Crie uma conta agora mesmo, é rápido!"
            name={true}
            confirmPassword={true}
            btnText={loading ? 'Cadastrando...' : 'Cadastrar'}
            loading={loading}
            register={true}
          />
        </AppContainer>
      </section>
    </>
  );
};

export default Register;
