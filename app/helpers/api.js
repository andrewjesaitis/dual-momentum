import axios from 'axios';

const APIKEY = 'QW72YRS9QGJAAC3W';
const URL = 'https://www.alphavantage.co/query';
const DATAKEY = 'Time Series (Daily)';
const CLOSEKEY = '4. close';
const ADJCLOSEKEY = '5. adjusted close';

function calculateReturn(cur, prev) {
  return (cur - prev) / prev;
}

const api = {
  getQuote(symbol) {
    const config = {
      params: {
        apikey: APIKEY,
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        outputsize: 'full',
        symbol: symbol.symbol,
      },
    };
    return axios.get(URL, config)
      .then((res) => {
        const ticker = symbol;
        const keys = Object.keys(res.data[DATAKEY]);
        const vals = Object.values(res.data[DATAKEY]);
        ticker.currentDate = keys[0];
        ticker.currentPrice = vals[0][CLOSEKEY];
        ticker.prevDate = keys[251];
        ticker.prevYearPrice = vals[251][ADJCLOSEKEY];
        ticker.annualReturn = calculateReturn(ticker.currentPrice, ticker.prevYearPrice);
        return ticker;
      });
  },
};

export default api;
