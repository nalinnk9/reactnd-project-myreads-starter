import React from 'react'
import { Books }  from './App'
import './index.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {reducer } from './redux/reducers/reducer';
import {Router} from 'react-router';
import { createHashHistory } from 'history';
import thunk from 'redux-thunk';

const browserHistory = createHashHistory();
const store = createStore(reducer, applyMiddleware(thunk));
render(
  <Router history = {browserHistory}>
    <Provider store={store}>
      <Books />
    </Provider>
    </Router>,
    document.getElementById('root')
  )