import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { SidebarProvider } from 'context/SidebarContext';
import { Header, Sidebar, SearchFeed } from 'components';

function Results() {
  const width = useWindowSize();
  return (
    <>
      <SidebarProvider>
        <Header />
        {width > 550 && <Sidebar />}
        <SearchFeed />
      </SidebarProvider>
    </>
  );
}

export default Results;
