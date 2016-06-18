import React, { PropTypes } from 'react';

function ListLine({ symbol, idx }) {
  var labelClass = 'pull-right label';
  var listClass = 'list-group-item disabled';
  if (symbol.annualReturn > 0) {
    labelClass += ' label-success';
    if (idx === 0) {
      listClass = 'list-group-item';
    }
  } else {
    labelClass += ' label-danger';
  }
  const formattedReturn = Math.round(symbol.annualReturn * 100, 4);
  return (
    <li className={listClass}>
      {symbol.symbol} ({symbol.currentPrice})
      <span title="Return over last year" className={labelClass}>{formattedReturn}%</span>
    </li>
  );
}


ListLine.propTypes = {
  symbol: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};


export default ListLine;
