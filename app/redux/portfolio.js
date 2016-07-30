import tickers from '../config/tickers';

const ADD_SECURITY = 'ADD_SECURITY';
const RECORD_VALUE = 'RECORD_VALUE';

// Actions
function addSecurity(symbol) {
  return {
    type: ADD_SECURITY,
    symbol
  };
}

function recordValue(amount, leverage) {
  return {
    type: RECORD_VALUE,
    amount,
    leverage
  };
}
      
// Reducer
const initialPortfolioState = {
  securities: {},
  amount: 100000,
  leverage: 1.0
};


function updatePorfolio(previousSecurities, symbol) {
  let updated = Object.assign({}, previousSecurities);
  if(_.has(updated, symbol)){
    _.set(updated, symbol, _.get(updated, symbol) + 25)
  } else {
    _.set(updated, symbol, 25)
  }
  return updated;
}

function portfolio (state = initialPortfolioState, action) {
  switch (action.type) {
    case ADD_SECURITY:
      return {
        ...state,
        securities: updatePorfolio(state.securities, action.symbol)
      };
    case RECORD_VALUE:
      return {
        ...state,
        amount: action.amount,
        leverage: action.leverage
      };
    default:
      return state;
  }
}

export { portfolio, addSecurity, recordValue };
