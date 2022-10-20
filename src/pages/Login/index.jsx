import React from 'react';
import useAuth from '../../hooks/useAuth';
import FormAuth from '../../components/Form/FormAuth';
import AppContainer from '../../components/AppContainer';
import Head from '../../components/Head';

const Login = () => {
  const { loading, login } = useAuth();

  const handleSubmit = async (user) => login(user);

  return (
    <>
      <Head title="NewsLBS - Entrar" />
      <section>
        <AppContainer>
          <FormAuth
            handleSubmit={handleSubmit}
            title="Entre em sua conta"
            btnText={loading ? 'Entrando...' : 'Entrar'}
            loading={loading}
            login={true}
          />
        </AppContainer>
      </section>
    </>
  );
};

export default Login;
