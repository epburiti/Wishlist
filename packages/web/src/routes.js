import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Store from './pages/Store';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Store} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
