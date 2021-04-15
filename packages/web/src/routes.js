import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Store from './pages/Store';
import Favorites from './pages/Favorites';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Store} path="/" exact />
      <Route component={Favorites} path="/favorites" exact />
    </BrowserRouter>
  );
};

export default Routes;
