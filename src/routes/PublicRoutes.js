import React from 'react';
import { Route } from 'react-router';
import MainPage from '../pages/app/mainPage/MainPage';
import Timing from '../pages/app/Timing';

const PublicRoutes = () => (
  <Route path="/" component={Timing}>
    <Route path="/app" component={MainPage} />
  </Route>
);

export default PublicRoutes;

