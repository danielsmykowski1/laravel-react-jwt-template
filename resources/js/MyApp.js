import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from './store';
// import Login from './scenes/Login';
import Main from './scenes/Main';
// import PrivateRoute from './components/PrivateRoute';

class MyApp extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {/* <Route path="/admin/login" name="Login" component={Login} />
          <PrivateRoute path="/admin" name="Main" component={Main} /> */}
          <Route path="/" name="Main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default MyApp;
