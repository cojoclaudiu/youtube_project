import React, { Suspense } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { Header, Sidebar, Categories } from 'components';
import { SidebarProvider } from 'context/SidebarContext';
import { HomeVideosProvider } from 'context/HomeVideosContext';

const HomeFeed = React.lazy(() => import('../components/HomeFeed/HomeFeed'));

function Homepage() {
  const width = useWindowSize();

  return (
    <>
      <HomeVideosProvider>
        <SidebarProvider>
          <Header />
          {width > 550 && <Sidebar />}
        </SidebarProvider>
        <Categories />
        <Suspense fallback={<div>Loading...</div>}>
          <HomeFeed />
        </Suspense>
      </HomeVideosProvider>
    </>
  );
}

export default Homepage;
