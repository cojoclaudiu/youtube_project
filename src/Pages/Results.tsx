import { SidebarProvider } from 'context/SidebarContext';
import { Header, Sidebar, SearchFeed } from 'components';
import { HomeVideosProvider } from 'context/HomeVideosContext';
import { Fragment } from 'react';

function Results() {
  return (
    <Fragment>
      <SidebarProvider>
        <HomeVideosProvider>
          <Header />
        </HomeVideosProvider>
        <Sidebar />
      </SidebarProvider>
      <SearchFeed />
    </Fragment>
  );
}

export default Results;
