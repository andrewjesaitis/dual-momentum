import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import ChartistGraph from 'react-chartist';
import { connect } from 'react-redux';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { securities: {}, allocation: [], amount: 100000, leverage: 1.0};
  }

  componentWillReceiveProps(newProps) {
    let quote = {};
    let cost = 0;
    let shares = 0;
    const amount = newProps.amount;
    const leverage = newProps.leverage;
    const allocation = _.transform(newProps.securities, (acc, val, key) => {
      quote = _.find(newProps.quotes, q => q.symbol === key);
      cost = val / 100.0 * amount * leverage;
      shares = Math.floor(cost / quote.currentPrice);
      acc.push([key, val, cost, shares]);
    }, []);
    this.setState({ securities: newProps.securities, allocation, amount, leverage });
  }

  createRow(item) {
    const [symbol, percentage, amt, shares] = item;
    return <tr><td>{symbol}</td><td>{percentage}%</td><td>{amt}</td><td>{shares}</td></tr>;
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
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Optimal Allocation</h3>
        </div>
        <div className="panel-body">
          <div className="col-xs-12">
            <div className="col-xs-6">
              <ChartistGraph data={data} options={options} type="Pie" />
            </div>
            <div className="col-xs-6">
              <table className="table">
                <thead><tr><th>Symbol</th><th>Percentage</th><th>Amount</th><th>Shares</th></tr></thead>
                <tbody>
                  {this.state.allocation.map(this.createRow)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PortfolioContainer.propTypes = {
};

function mapStateToProps({ portfolio, stocks }) {
  return {
    securities: portfolio.securities,
    amount: portfolio.amount,
    leverage: portfolio.leverage,
    quotes: stocks.quotes,
  };
}

export default connect(mapStateToProps)(PortfolioContainer);
