import React, { useEffect } from 'react';
import { Route } from 'react-router';
import Home from './pages/Home';
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
    </div>
  );
}

export default connect(null, { getWrestlers })(App);
