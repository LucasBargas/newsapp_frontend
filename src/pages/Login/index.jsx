import React from 'react';
import FormAuth from '../../components/Form/FormAuth';
import AppContainer from '../../components/AppContainer';
import useUserAuthContext from '../../hooks/useUserAuthContexts';

const Login = () => {
  const { loading, login } = useUserAuthContext();

  const handleSubmit = async (user) => {
    login(user);
  };

  return (
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
  );
};

export default Login;
