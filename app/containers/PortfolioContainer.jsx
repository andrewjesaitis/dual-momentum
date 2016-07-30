import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { securities: {}, allocation: [], amount: 100000, leverage: 1.0 };
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

  render() {
    return <Portfolio securities={this.state.securities} allocation={this.state.allocation} />;
  }
}

function mapStateToProps({ portfolio, stocks }) {
  return {
    securities: portfolio.securities,
    amount: portfolio.amount,
    leverage: portfolio.leverage,
    quotes: stocks.quotes,
  };
}

export default connect(mapStateToProps)(PortfolioContainer);
