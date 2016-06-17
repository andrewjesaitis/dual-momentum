import React, { PropTypes } from 'react';

function Perf({ title, symbols }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-body">
        <ul>
          <li>{symbols[0].symbol}</li>
          <li>{symbols[1].symbol}</li>
          <li>{symbols[2].symbol}</li>
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
