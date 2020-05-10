import React from 'react';
import { AthletesPage, AthleteDetails } from './pages';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const RootNavigator = () => {
  return (
    <Router>
     <Switch>
      <Route exact path='/'>
        <AthletesPage />
      </Route>
      <Route path='/athlete/:id'>
        <AthleteDetails />
      </Route>
    </Switch>
  </Router>
  );
};

export default RootNavigator;