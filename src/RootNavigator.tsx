import React from 'react';
import { AthletesPage } from './pages';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const RootNavigator = () => {
  return (
    <Router>
     <Switch>
      <Route path='/'>
        <AthletesPage />
      </Route>
    </Switch>
  </Router>
  );
};

export default RootNavigator;