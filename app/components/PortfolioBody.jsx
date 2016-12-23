import React, { PropTypes } from 'react';
import _ from 'lodash';
import ChartistGraph from 'react-chartist';

import Loading from './Loading';

function renderRow(item) {
  const [symbol, percentage, amt, shares] = item;
  return (
    <tr key={symbol}>
      <td>{symbol}</td>
      <td>{percentage}%</td>
      <td>{amt}</td>
      <td>{shares}</td>
    </tr>
  );
}

function PortfolioBody({isLoading, allocation, securities}) {
  const data = {
    labels: _.keys(securities),
    series: _.values(securities),
  };
  
  const options = {
    width: '200px',
    height: '200px',
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="row row-centered">
      <div className="col-sm-5 col-centered">
        <ChartistGraph data={data} options={options} type="Pie" />
      </div>
      <div className="col-sm-5 col-centered">
        <table className="table">
          <thead><tr>
            <th>Symbol</th>
            <th>Percent</th>
            <th>Amount</th>
            <th>Shares</th>
          </tr></thead>
          <tbody>
            {allocation.map(renderRow)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

PortfolioBody.propTypes = {
  securities: PropTypes.object.isRequired,
  allocation: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default PortfolioBody;

