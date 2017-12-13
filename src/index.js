import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';

const app = (
  <BrowserRouter>
    <BreadcrumbsProvider>
      <App/ >
    </BreadcrumbsProvider>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
