import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, LinearProgress } from '@material-ui/core';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Suspense fallback={<LinearProgress />}>
    <BrowserRouter>
      <App />
      <CssBaseline />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
