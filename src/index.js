import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './theme.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} href="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
