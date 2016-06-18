import React, { PropTypes } from 'react';
import ListLine from './ListLine';
import Loading from './Loading';
import * as styles from '../styles/styles';

function SymbolList({ symbols, isLoading }) {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ul style={styles.symbolList}>
      {
        symbols.map((symbol, idx) => <ListLine symbol={symbol} idx={idx} key={symbol.code} />)
       }
    </ul>
  );
}

SymbolList.propTypes = {
  symbols: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SymbolList;
