import React, { PropTypes } from 'react';

function Perf({ title }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-body">
        <ul>
          <li>Symbol 1</li>
          <li>Symbol 2</li>
          <li>Symbol 3</li>
        </ul>
      </div>
    </div>
  );
}

Perf.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Perf;
