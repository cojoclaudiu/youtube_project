import { createContext, PropsWithChildren, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [sidebar, setSidebar] = useState();

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>{children}</SidebarContext.Provider>
  );
};
