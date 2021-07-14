import React from 'react';
import { Header, Sidebar, Categories, HomeFeed } from 'components';
import useWindowSize from 'hooks/useWindowSize';
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
