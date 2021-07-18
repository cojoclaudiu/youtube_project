import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { SidebarProvider } from 'context/SidebarContext';
import { Header, Sidebar, SearchFeed } from 'components';
import { HomeVideosProvider } from 'context/HomeVideosContext';

function Results() {
  const width = useWindowSize();
  return (
    <>
      <SidebarProvider>
        <HomeVideosProvider>
          <Header />
        </HomeVideosProvider>
        {width > 550 && <Sidebar />}
      </SidebarProvider>
      <SearchFeed />
    </>
  );
}

export default Results;
