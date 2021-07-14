import React from 'react';
import useWindowSize from 'Hooks/useWindowSize';
import { Header, Sidebar, Categories, HomeFeed } from 'components';
import { SidebarProvider } from '../context/SidebarContext';

function Homepage() {
  const width = useWindowSize();

  return (
    <>
      <SidebarProvider>
        <Header />
        {width > 550 && <Sidebar />}
      </SidebarProvider>
      <Categories />
      <HomeFeed />
    </>
  );
}

export default Homepage;
