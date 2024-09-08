import { Header, Sidebar, VideoPage } from 'components';

import { SidebarProvider } from 'context/SidebarContext';
import { HomeVideosProvider } from 'context/HomeVideosContext';
import { Fragment } from 'react/jsx-runtime';

function Watch() {
  return (
    <Fragment>
      <SidebarProvider>
        <HomeVideosProvider>
          <Header />
        </HomeVideosProvider>
        <Sidebar />
      </SidebarProvider>
      <VideoPage />
    </Fragment>
  );
}

export { Watch };
