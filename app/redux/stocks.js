import { api } from '../helpers/api';
import { fromJS, Map } from 'immutable';

const FETCHING_STOCKS = 'FETCHING_STOCKS';
const FETCHING_STOCKS_SUCESS = 'FETCHING_STOCKS_SUCESS';
const FETCHING_STOCKS_ERROR = 'FETCHING_STOCKS_ERROR';

const initialStockState = fromJS({
  lastUpdated: 0,
  isFetching: false,
  stocks: [],
});


export default function stocks (state = initialStockState, action) {
  switch (action.type) {
    case FETCHING_STOCKS:
      return state.set('isFetching', true);
    default:
      return state;
  }
}
