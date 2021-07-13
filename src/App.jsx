import './styles/app.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import Header from 'components/Header/Header';
import Categories from 'components/Categories/Categories';
import Sidebar from 'components/Sidebar/Sidebar';
import HomePage from 'components/HomePage/HomePage';
import VideoPage from 'components/VideoPage/VideoPage';
import SearchFeed from 'components/SearchFeed/SearchFeed';
import { SidebarProvider } from 'context/SidebarContext';

const App = () => {
  const width = useWindowSize();

  return (
    <div className="mainWrapper">
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
    </div>
  );
};

export default App;
