import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from 'Pages/Homepage';
import Watch from 'Pages/Watch';
import Results from 'Pages/Results';

function Routes() {
  return (
    <Router>
      <Switch>
        {/* HOMEPAGE */}
        <Route path="/" exact component={Homepage} />

        {/* VIDEOPAGE */}
        <Route path="/watch" exact component={Watch} />

        {/* SEARCH FEED */}
        <Route path="/results" exact component={Results} />
      </Switch>
    </Router>
  );
}

export default Routes;
