const tickers = {
  equities: ['SPY', 'VEU', 'SHY'],
  credit: ['LQD', 'JNK', 'SHY'],
  realEstate: ['VNQ', 'REM', 'SHY'],
  econ: ['GLD', 'TLT', 'SHY'],
  all: [{ symbol: 'SPY', code: 'GOOG/NYSE_SPY' },
        { symbol: 'VEU', code: 'GOOG/AMEX_VEU' },
        { symbol: 'LQD', code: 'GOOG/NYSEARCA_LQD' },
        { symbol: 'JNK', code: 'GOOG/AMEX_JNK' },
        { symbol: 'VNQ', code: 'GOOG/AMEX_VNQ' },
        { symbol: 'REM', code: 'GOOG/AMEX_REM' },
        { symbol: 'GLD', code: 'GOOG/NYSEARCA_GLD' },
        { symbol: 'TLT', code: 'GOOG/AMEX_TLT' },
        { symbol: 'SHY', code: 'GOOG/NYSEARCA_SHY' }],
};

export default tickers;
