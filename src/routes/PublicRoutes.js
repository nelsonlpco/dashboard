import React from 'react';
import { Route } from 'react-router';
import LoginPage from '../pages/loginPage/LoginPage';
import MainPage from '../pages/app/mainPage/MainPage';

const PublicRoutes = () => (
  <Route path="/" component={LoginPage}>
    <Route path="/app" component={MainPage} />
  </Route>
);

export default PublicRoutes;

