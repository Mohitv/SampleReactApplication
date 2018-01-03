import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './App';
import reducers from './reducers'


const app = (
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <BreadcrumbsProvider>
        <App/ >
      </BreadcrumbsProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
