import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import ChartistGraph from 'react-chartist';

export default class Portfolio extends Component {

  renderRow(item) {
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

  render() {
    const data = {
      labels: _.keys(this.props.securities),
      series: _.values(this.props.securities),
    };

    const options = {
      width: '200px',
      height: '200px',
    };

    return (
      <div className="col-xs-10 col-centered">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Optimal Allocation</h3>
          </div>
          <div className="panel-body">
            <div className="row row-centered">
              <div className="col-sm-5 col-centered">
                <ChartistGraph data={data} options={options} type="Pie" />
              </div>
              <div className="col-sm-5 col-centered">
                <table className="table">
                  <thead><tr>
                    <th>Symbol</th>
                    <th>Percentage</th>
                    <th>Amount</th>
                    <th>Shares</th>
                  </tr></thead>
                  <tbody>
                    {this.props.allocation.map(this.renderRow)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  securities: PropTypes.object.isRequired,
  allocation: PropTypes.array.isRequired,
};
