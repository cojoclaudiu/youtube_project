import useWindowSize from 'hooks/useWindowSize';
import { Header, Sidebar, Categories, HomeFeed } from 'components';
import { SidebarProvider } from 'context/SidebarContext';
import { HomeVideosProvider } from 'context/HomeVideosContext';

function Homepage() {
  const width = useWindowSize();

  return (
    <>
      <SidebarProvider>
        <HomeVideosProvider>
          <Header />
          <HomeFeed />
        </HomeVideosProvider>
        {width > 550 && <Sidebar />}
      </SidebarProvider>
      <Categories />
    </>
  );
}

export default Homepage;
