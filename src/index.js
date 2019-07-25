import React from 'react';
import App from './App.jsx';
import './index.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
