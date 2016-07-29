import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import ChartistGraph from 'react-chartist';
import { connect } from 'react-redux';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { securities: {}, allocation: [] };
  }

  componentWillReceiveProps(newProps) {
    const amt = 1000000; //newProps.amount;
    const allocation = _.transform(newProps.securities, (acc, val, key) => {
      acc.push([key, val, val / 100.0 * amt]);
    }, []);
    this.setState({ securities: newProps.securities, allocation });
  }

  createRow(item) {
    const [symbol, percentage, amt] = item;
    return <tr><td>{symbol}</td><td>{percentage}%</td><td>{amt}</td></tr>;
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
                <thead><tr><th>Symbol</th><th>Percentage</th><th>Amount</th></tr></thead>
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

function mapStateToProps({ portfolio }) {
  return {
    securities: portfolio.securities,
  };
}

export default connect(mapStateToProps)(PortfolioContainer);
