import googleFinance from 'google-finance';

function calculateReturn(cur, prev) {
  return (cur - prev) / prev;
}

const api = {
  getQuote(symbol) {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 1);
    const oneYearAgo = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 0-indexed months

    const sym = symbol.code.slice(5); //remove GOOG/
    return new Promise(function(resolve,reject){
      googleFinance.historical({
        symbol: sym,
        from: oneYearAgo
      },function(err,data){
           if(err !== null) return reject(err);
           resolve(data);
       })})
      .then((res) => {
        const ticker = symbol;
        console.log(res);
        const data = res;
        ticker.currentPrice = data[data.length - 1].close;
        ticker.annualReturn = calculateReturn(ticker.currentPrice,
                                              data[0].close);
        return ticker;
      });
  },
};

export default api;
