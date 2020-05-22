import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
//BAREL
//routing
//komponenty żeby miały jakąś wysokość

function App() {
  return (
      <Router>
        <Switch>
          <Route exact patch="/" component={Home}/>
        </Switch>
      </Router>

  );
}

export default App;
