import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Router from './router/Router';
import store from './store/reducers/index';
import initFirebase from './firebase/init';
import registerServiceWorker from './registerServiceWorker';

const Budgapp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Budgapp />, document.getElementById('root'));
initFirebase();
registerServiceWorker();
