import React, { PropTypes } from 'react';
import SymbolList from '../components/SymbolList';

function Perf({ title, symbols, isLoading }) {
  return (
    <div className="col-xs-7 col-sm-5 col-centered">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          <SymbolList symbols={symbols} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

Perf.propTypes = {
  title: PropTypes.string.isRequired,
  symbols: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Perf;
