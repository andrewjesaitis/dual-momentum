import api from '../helpers/api';
import tickers from '../config/tickers';
import axios from 'axios';

const FETCHING_STOCKS = 'FETCHING_STOCKS';
const FETCHING_STOCKS_SUCCESS = 'FETCHING_STOCKS_SUCCESS';
const FETCHING_STOCKS_ERROR = 'FETCHING_STOCKS_ERROR';

// Actions

function requestStocks() {
  return {
    type: FETCHING_STOCKS,
    isFetching: true,
  };
}

function recieveQuotes(quotes) {
  return {
    type: FETCHING_STOCKS_SUCCESS,
    quotes,
    isFetching: false,
    lastUpdated: Date.now(),
  };
}

function fetchingStocksError(error) {
  return {
    type: FETCHING_STOCKS_ERROR,
    isFetching: false,
    error,
  };
}

function fetchStocks() {
  return dispatch => {
    dispatch(requestStocks());
    return axios.all(tickers.all.map(t => api.getQuote(t)))
      .then(quotes => dispatch(recieveQuotes(quotes)))
      .catch(err => dispatch(fetchingStocksError(err)));
  };
}

// Reducer
const initialStockState = {
  lastUpdated: 0,
  isFetching: false,
  quotes: [],
  error: {},
};


function stocks(state = initialStockState, action) {
  switch (action.type) {
    case FETCHING_STOCKS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });
    case FETCHING_STOCKS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        quotes: action.quotes,
        lastUpdated: action.lastUpdated,
      });
    case FETCHING_STOCKS_ERROR:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.error,
      });
    default:
      return state;
  }
}

export { stocks, fetchStocks };
