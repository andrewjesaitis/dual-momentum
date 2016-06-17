const tickers = {
  equities: [{ symbol: 'SPY', code: 'GOOG/NYSE_SPY' },
             { symbol: 'VEU', code: 'GOOG/AMEX_VEU' },
             { symbol: 'SHY', code: 'GOOG/NYSEARCA_SHY' }],
  credit: [{ symbol: 'LQD', code: 'GOOG/NYSEARCA_LQD' },
           { symbol: 'JNK', code: 'GOOG/AMEX_JNK' },
           { symbol: 'SHY', code: 'GOOG/NYSEARCA_SHY' }],
  realEstate: [{ symbol: 'VNQ', code: 'GOOG/AMEX_VNQ' },
               { symbol: 'REM', code: 'GOOG/AMEX_REM' },
               { symbol: 'SHY', code: 'GOOG/NYSEARCA_SHY' }],
  econ: [{ symbol: 'GLD', code: 'GOOG/NYSEARCA_GLD' },
         { symbol: 'TLT', code: 'GOOG/AMEX_TLT' },
         { symbol: 'SHY', code: 'GOOG/NYSEARCA_SHY' }],

};

export default tickers;
