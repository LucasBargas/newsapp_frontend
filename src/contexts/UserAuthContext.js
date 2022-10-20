import React, { createContext, useState } from 'react';

export const UserCtx = createContext();

export const UserProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <UserCtx.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </UserCtx.Provider>
  );
};
