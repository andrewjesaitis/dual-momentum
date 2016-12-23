import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Main from './components/Main';
import { stocks } from './redux/stocks';
import { portfolio } from './redux/portfolio';

let middleware = [thunkMiddleware];

//Don't apply redux-logger in production
if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();
  middleware = [...middleware, loggerMiddleware]
}

const store = createStore(
  combineReducers({
    stocks,
    portfolio,
  }),
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);

