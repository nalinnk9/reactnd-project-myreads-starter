import React from 'react'
import { Books }  from './App'
import './index.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {reducer, defaultState } from './redux/reducers/reducer';


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}
function getFromLocalStorage() {
  try {
    const state = localStorage.getItem('state');
    if(state === null) {
      return JSON.parse(defaultState);
    }
    return JSON.parse(state);
  }
  catch(e) {
    return JSON.parse(defaultState);
  }
}
const persistedState = getFromLocalStorage();
const store = createStore(reducer,persistedState);
render(
    <Provider store={store}>
      <Books />
    </Provider>,
    document.getElementById('root')
  )

  store.subscribe(() => saveToLocalStorage(store.getState()));