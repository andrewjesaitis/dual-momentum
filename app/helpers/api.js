import axios from 'axios';

const APIKEY = '3z1ZryQpnrCFysjv9bp_';
const APIVERSION = 'v3';
const URL = 'https://www.quandl.com/api/';

const api = {
  getQuote(symbol) {
    var ticker = symbol;
    ticker.currentPrice = 0;
    ticker.annualReturn = 0;
    return ticker;
  },
};

export default api;
