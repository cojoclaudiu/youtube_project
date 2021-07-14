import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Watch from './Watch';
import Results from './Results';

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
