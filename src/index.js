import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/css/index.css';
import store from './redux/store';
import App from './page/App';

const VIRTUAL_DOM = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(VIRTUAL_DOM, document.getElementById('root'));
