import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import { SidebarProvider } from 'context/SidebarContext';
import { Header, Categories, Sidebar, HomePage, VideoPage, SearchFeed } from 'components';

function Routes() {
  const width = useWindowSize();

  return (
    <Router>
      <Switch>
        {/* HOMEPAGE */}
        <Route path="/" exact>
          <SidebarProvider>
            <Header />
            {width > 550 && <Sidebar />}
          </SidebarProvider>
          <Categories />
          <HomePage />
        </Route>

        {/* VIDEOPAGE */}
        <Route path="/watch" exact>
          <SidebarProvider>
            <Header />
            {width > 550 && <Sidebar />}
          </SidebarProvider>
          <VideoPage />
        </Route>

        {/* SEARCH FEED */}
        <Route path="/results" exact>
          <SidebarProvider>
            <Header />
            {width > 550 && <Sidebar />}
            <SearchFeed />
          </SidebarProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
