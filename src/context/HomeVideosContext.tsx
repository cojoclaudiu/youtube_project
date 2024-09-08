import React, { createContext, PropsWithChildren, useState } from 'react';

export const HomeVideosContext = createContext();

export const HomeVideosProvider = ({ children }: PropsWithChildren) => {
  const [keyword, setKeyword] = useState(null);

  return (
    <HomeVideosContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </HomeVideosContext.Provider>
  );
};
