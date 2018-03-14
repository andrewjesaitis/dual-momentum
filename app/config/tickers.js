const tickers = {
  equities: ['SPY', 'VEU', 'SHY'],
  credit: ['LQD', 'JNK', 'SHY'],
  realEstate: ['VNQ', 'MORT', 'SHY'],
  econ: ['GLD', 'TLT', 'SHY'],
  all: [{ symbol: 'SPY', code: 'GOOG/SPY' },
        { symbol: 'VEU', code: 'GOOG/VEU' },
        { symbol: 'LQD', code: 'GOOG/LQD' },
        { symbol: 'JNK', code: 'GOOG/JNK' },
        { symbol: 'VNQ', code: 'GOOG/VNQ' },
        { symbol: 'MORT', code: 'GOOG/MORT' },
        { symbol: 'GLD', code: 'GOOG/GLD' },
        { symbol: 'TLT', code: 'GOOG/TLT' },
        { symbol: 'SHY', code: 'GOOG/SHY' }],
};

export default tickers;
