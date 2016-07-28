import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import ChartistGraph from 'react-chartist';
import * as styles from '../styles/styles';
import { connect } from 'react-redux';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { securities: {} };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ securities: newProps.securities });
  }

  render() {
    const data = {
      labels: _.keys(this.props.securities),
      series: _.values(this.props.securities),
    };

    const options = {
      width: '300px',
      height: '300px',
    };

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Optimal Allocation</h3>
        </div>
        <div className="panel-body">
            <ChartistGraph data={data} options={options} type="Pie" />
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
