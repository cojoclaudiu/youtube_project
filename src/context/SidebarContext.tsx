import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface SidebarContextState {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext({} as SidebarContextState);

const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>{children}</SidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  return context;
};

export { SidebarProvider, useSidebarContext };
