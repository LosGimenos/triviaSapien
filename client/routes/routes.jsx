import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../components/main.jsx';
import Nav from '../components/nav.jsx';

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
