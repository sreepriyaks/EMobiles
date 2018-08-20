import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import User from './components/user';
import Phone from './components/phone';
import Admin from './components/admin';

export default (
  <div>
    <Route path="/" component={App} />
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/phones/:id" component={Phone} />
      <Route path="/" component={User} />
    </Switch>
  </div>
);
