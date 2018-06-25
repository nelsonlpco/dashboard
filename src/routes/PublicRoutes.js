import React from 'react';
import { Route } from 'react-router';
import MainPage from '../pages/app/mainPage';

const PublicRoutes = () => (
  <Route path="/" component={MainPage} />
);

export default PublicRoutes;

