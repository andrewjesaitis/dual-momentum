import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { addSecurity } from '../redux/portfolio';
import Perf from '../components/Perf';

class PerfContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { bucket: [] };
  }

  componentWillReceiveProps(newProps) {
    const filtered = _.chain(newProps.quotes)
                    .filter(q => _.includes(this.props.tickers, q.symbol))
                    .sortBy(q => -1 * q.annualReturn) // sort descending
                    .value();
    this.setState({ bucket: filtered });
    this.props.addSecurity(_.head(filtered).symbol);
  }

  render() {
    return (
      <Perf
        title={this.props.title}
        symbols={this.state.bucket}
        isLoading={this.props.isLoading}
      />
    );
  }
}

PerfContainer.propTypes = {
  title: PropTypes.string.isRequired,
  tickers: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  quotes: PropTypes.array.isRequired,
  addSecurity: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addSecurity }, dispatch);
}

function mapStateToProps({ stocks }) {
  return {
    isLoading: stocks.isFetching,
    quotes: stocks.quotes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfContainer);
