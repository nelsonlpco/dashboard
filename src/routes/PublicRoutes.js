import React from 'react';
import { Route } from 'react-router';
import MainPage from '../pages/app/mainPage/MainPage';
import BurnDownPage from './../pages/app/BurnDown/BurnDownPage';

const PublicRoutes = () => (
  <Route path="/" component={BurnDownPage}>
    <Route path="/app" component={MainPage} />
  </Route>
);

export default PublicRoutes;

