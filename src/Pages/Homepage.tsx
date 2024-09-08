import { Header, Sidebar, Categories, HomeFeed } from 'components';
import { SidebarProvider } from 'context/SidebarContext';
import { HomeVideosProvider } from 'context/HomeVideosContext';
import { Fragment } from 'react/jsx-runtime';

function Homepage() {
  return (
    <Fragment>
      <SidebarProvider>
        <HomeVideosProvider>
          <Header />
          <HomeFeed />
        </HomeVideosProvider>
        <Sidebar />
      </SidebarProvider>
      <Categories />
    </Fragment>
  );
}

export default Homepage;
