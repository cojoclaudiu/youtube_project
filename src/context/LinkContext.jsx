import React, { createContext, useState } from 'react';

export const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [link, setLink] = useState('/');
  // console.log('from context', link)
  return <LinkContext.Provider value={{ link, setLink }}>{children}</LinkContext.Provider>;
};
