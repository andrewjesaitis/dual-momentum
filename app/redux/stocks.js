import api from '../helpers/api';
import tickers from '../config/tickers';

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

function makeQuandlCalls() {
  // Serially make quandl requests to deal with rate limit
  let quotes = [];
  let result = Promise.resolve(); // empty promise to kick off chain
  tickers.all.forEach(ticker => {
    result = result.then((res) => {
      return api.getQuote(ticker).then(q => quotes.push(q));
    })
    .catch(err => Promise.reject(err));
  });
  // Return a promise containing all the quotes that resolves
  //when the last api call finishes
  return result.then((res) => Promise.resolve(quotes));
}

function fetchStocks() {
  return dispatch => {
    dispatch(requestStocks());
    return makeQuandlCalls()
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
