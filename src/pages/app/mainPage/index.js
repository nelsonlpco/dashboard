import React from 'react';
import { PropTypes } from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Link, Switch } from 'react-router-dom';

import Timing from '../Timing';
import BurnDownPage from '../BurnDown';

import './main-page.css';

const propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

const MainPage = ({ location }) => {
  console.log(' location ==> ', location);

  const isActive = function (path, locationPath) {
    return path === locationPath ? 'active' : '';
  };

  return (
    <div className="main-container-grid">
      <div className="main-container-header">
        <div />
        <div className="main-pages">
          <Link href="." to="/"><div className={`main-link ${isActive('/', location.pathname)}`} /></Link>
          <Link href="." to="/burn-down"><div className={`main-link ${isActive('/burn-down', location.pathname)}`} /></Link>
        </div>
        <div />
      </div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="example"
          timeout={{ enter: 500, exit: 300 }}
        >
          <Switch location={location}>
            <Route exact path="/" component={BurnDownPage} />
            <Route exact path="/burn-down" component={Timing} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
