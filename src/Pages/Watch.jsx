import React from 'react';
import { Header, Sidebar, VideoPage } from 'components';
import useWindowSize from 'hooks/useWindowSize';
import { SidebarProvider } from 'context/SidebarContext';
import { HomeVideosProvider } from 'context/HomeVideosContext';

function Watch() {
  const width = useWindowSize();
  return (
    <>
      <HomeVideosProvider>
        <SidebarProvider>
          <Header />
          {width > 550 && <Sidebar />}
        </SidebarProvider>
        <VideoPage />
      </HomeVideosProvider>
    </>
  );
}

export default Watch;
