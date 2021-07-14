import React from 'react';
import { Header, Sidebar, VideoPage } from 'components';
import useWindowSize from 'hooks/useWindowSize';
import { SidebarProvider } from '../context/SidebarContext';

function Watch() {
  const width = useWindowSize();
  return (
    <>
      <SidebarProvider>
        <Header />
        {width > 550 && <Sidebar />}
      </SidebarProvider>
      <VideoPage />
    </>
  );
}

export default Watch;
