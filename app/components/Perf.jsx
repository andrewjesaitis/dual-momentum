import React, { PropTypes } from 'react';
import * as styles from '../styles/styles';

function Perf({ title, symbols }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-body">
        <ul style={styles.symbolList}>
          {
            symbols.map(function (symbol, idx) {
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
              return (<li className={listClass}>
                {symbol.symbol} ({symbol.currentPrice})
                  <span title="Return over last year" className={labelClass}>{formattedReturn}%</span>
              </li>);
            })
          }
        </ul>
      </div>
    </div>
  );
}

Perf.propTypes = {
  title: PropTypes.string.isRequired,
  symbols: PropTypes.array.isRequired,
};

export default Perf;
