import React from 'react'
import { Books }  from './App'
import './index.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {reducer } from './redux/reducers/reducer';
import { middleware } from './redux/middlewares/middleware';
import {Router} from 'react-router';
import { createHashHistory } from 'history';

const browserHistory = createHashHistory();
const store = createStore(reducer, applyMiddleware(middleware));
render(
  <Router history = {browserHistory}>
    <Provider store={store}>
      <Books />
    </Provider>
    </Router>,
    document.getElementById('root')
  )