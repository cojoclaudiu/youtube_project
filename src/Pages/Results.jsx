import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { SidebarProvider } from 'context/SidebarContext';
import { Header, Sidebar, SearchFeed } from 'components';
import { HomeVideosProvider } from 'context/HomeVideosContext';

function Results() {
  const width = useWindowSize();
  return (
    <HomeVideosProvider>
      <SidebarProvider>
        <Header />
        {width > 550 && <Sidebar />}
        <SearchFeed />
      </SidebarProvider>
    </HomeVideosProvider>
  );
}

export default Results;
