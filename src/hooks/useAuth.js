import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authUser from '../helpers/authUser';
import api from '../utils/api';
import useFlashMessages from './useFlashMessages';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessages();

  useEffect(() => {
    const token = localStorage.getItem('apiToken');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      return;
    }
  }, []);

  const register = async (user) => {
    let msgText = 'Cadastro realizado com sucesso. Bem vindo(a)!';
    let msgType = 'success';

    try {
      setLoading(true);
      const data = await api
        .post('/users/register', user)
        .then((response) => response.data);

      await authUser(setAuthenticated, data.token, navigate);
      return;
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
      return;
    } finally {
      setFlashMessage(msgText, msgType);
      setLoading(false);
    }
  };

  const login = async (user) => {
    let msgText = 'Login realizado com sucesso. Bem vindo(a)!';
    let msgType = 'success';

    try {
      setLoading(true);
      const data = await api
        .post('/users/login', user)
        .then((response) => response.data);

      await authUser(setAuthenticated, data.token, navigate);
      return;
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
      return;
    } finally {
      setFlashMessage(msgText, msgType);
      setLoading(false);
    }
  };

  const logout = () => {
    const msgText = 'Você desconectou com sucesso. Até logo!';
    const msgType = 'success';

    setAuthenticated(false);
    localStorage.removeItem('apiToken');
    api.defaults.headers.Authorization = undefined;
    navigate('/entrar');

    setFlashMessage(msgText, msgType);
  };

  const deleteAccount = async () => {
    const deleteDatas = async () => {
      let msgType = 'success';

      const data = await api
        .delete('/users/delete', {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('apiToken') || '',
            )}`,
          },
        })
        .then((response) => {
          setAuthenticated(false);
          localStorage.removeItem('apiToken');
          api.defaults.headers.Authorization = undefined;
          navigate('/entrar');
          return response.data;
        })
        .catch((err) => {
          msgType = 'error';

          return err.response.data;
        });

      setFlashMessage(data.message, msgType);
    };

    deleteDatas();
  };

  return {
    loading,
    register,
    authenticated,
    login,
    logout,
    deleteAccount,
  };
};

export default useAuth;
