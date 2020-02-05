import React, { useEffect } from 'react';
import { Route } from 'react-router';
import Home from './pages/Home';
import Wrestler from './pages/Wrestler';
import State from './pages/State';
import './styles/index.scss';
import { connect } from 'react-redux'
import { getWrestlers } from './actions/wrestlers';

const App = ({getWrestlers}) => {
  useEffect(() => {
    getWrestlers();
  })
  return (
    <div className="App">
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/wrestlers/:wrestleruuid"
        component={Wrestler}
      />
      <Route
        path="/states/:stateuuid"
        component={State}
      />
    </div>
  );
}

export default connect(null, { getWrestlers })(App);
