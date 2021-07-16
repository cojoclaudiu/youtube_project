import React, { createContext, useState } from 'react';

export const HomeVideosContext = createContext();

export const HomeVideosProvider = ({ children }) => {
  const [keyword, setKeyword] = useState(null);

  return (
    <HomeVideosContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </HomeVideosContext.Provider>
  );
};
