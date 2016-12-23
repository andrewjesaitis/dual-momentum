import React, { PropTypes } from 'react';
import PortfolioBody from './PortfolioBody';

function Portfolio({isLoading, allocation, securities}) {
  return (
    <div className="col-xs-10 col-centered">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Optimal Allocation</h3>
        </div>
        <div className="panel-body">
          <PortfolioBody 
              isLoading={isLoading}
              allocation={allocation}
              securities={securities}
          />
        </div>
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  securities: PropTypes.object.isRequired,
  allocation: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Portfolio;
