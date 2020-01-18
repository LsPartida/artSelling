import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';

import PublicRoutes from './public/Public.routes';
import PrivateRoutes from './private/Private.routes';

import App from '../App/App';

const AppRouter = ({ loadUser }) => {
  loadUser();
  return (
    <App>
      <Switch>
        <PublicRoutes />
        <PrivateRoutes />
      </Switch>
    </App>
  );
};

export default connect(null, { loadUser })(AppRouter);
