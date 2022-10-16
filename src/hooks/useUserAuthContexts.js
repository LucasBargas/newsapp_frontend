import { useContext } from 'react';
import { UserCtx } from '../contexts/UserAuthContext';

const useUserAuthContext = () => {
  const { loading, register, authenticated, login, logout, deleteAccount } =
    useContext(UserCtx);

  return { loading, register, authenticated, login, logout, deleteAccount };
};

export default useUserAuthContext;
