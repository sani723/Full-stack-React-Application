import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Template from '../containers/Template';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home} />
        <Route path="/profile" component={Profile} />
      </Route>
    </Router>
  );
}

export default Routes;
