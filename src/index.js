import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import Reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './main.scss';

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
