import { useContext } from 'react';
import { UserCtx } from '../contexts/UserAuthContext';

const useUserAuthContext = () => {
  const { authenticated, setAuthenticated } = useContext(UserCtx);

  return { authenticated, setAuthenticated };
};

export default useUserAuthContext;
