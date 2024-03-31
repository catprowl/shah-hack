import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './services';
import SubOptions from './SubOptions';
import Price from './Price';
import DateTime from './datetime';
import Address from './Address';
import Admin from './admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Services} />
        <Route path="/sub-options/:service" component={SubOptions} />
        <Route path="/price" component={Price} />
        <Route path="/date-time" component={DateTime} />
        <Route path="/address" component={Address} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
