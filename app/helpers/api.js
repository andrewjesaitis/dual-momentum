import axios from 'axios';

const APIKEY = '3z1ZryQpnrCFysjv9bp_';
const APIVERSION = '/v3';
const URL = 'https://www.quandl.com/api';
const DATASETS = '/datasets';
const DATATYPE = '.json';

function calculateReturn(cur, prev) {
  return (cur - prev) / prev;
}

const api = {
  getQuote(symbol) {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 1);
    const oneYearAgo = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 0-indexed months
    const currentUrl = URL.concat(APIVERSION, DATASETS, '/', symbol.code, DATATYPE);

    const config = {
      params: {
        api_key: APIKEY,
        start_date: oneYearAgo,
        column_index: 4,
      },
    };
    return axios.get(currentUrl, config)
      .then((res) => {
        const ticker = symbol;
        const data = res.data.dataset.data;
        ticker.currentPrice = data[0][1];
        ticker.annualReturn = calculateReturn(ticker.currentPrice,
                                              data[data.length - 1][1]);
        return ticker;
      });
  },
};

export default api;
