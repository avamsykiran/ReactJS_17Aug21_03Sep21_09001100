import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { APP_TITLE } from './constants';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore,applyMiddleware,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import txnsReducer from './txns/stateManagement/reducer'
import usersReducer from './users/stateManagement/reducer'

let myStore = createStore(combineReducers({
  users:usersReducer,
  txns:txnsReducer
}),applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App title={APP_TITLE} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
