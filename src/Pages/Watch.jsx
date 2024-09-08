import { Header, Sidebar, VideoPage } from 'components';
import useWindowSize from 'hooks/useWindowSize';
import { SidebarProvider } from 'context/SidebarContext';
import { HomeVideosProvider } from 'context/HomeVideosContext';

function Watch() {
  const width = useWindowSize();
  return (
    <>
      <SidebarProvider>
        <HomeVideosProvider>
          <Header />
        </HomeVideosProvider>
        {width > 550 && <Sidebar />}
      </SidebarProvider>
      <VideoPage />
    </>
  );
}

export default Watch;
