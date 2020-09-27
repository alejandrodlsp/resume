import React from 'react';

import Home from './sites/Home.jsx';
import Resume from './sites/Resume.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
