import React, { Component, PropTypes } from 'react';
import Perf from '../components/Perf';
import api from '../helpers/api';

class PerfContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      symbols: [],
    };
  }
  componentWillMount() {
    this.setState({ title: this.props.title,
                    symbols: this.props.tickers.map(
                      t => api.getQuote(t)),
    });
  }
  render() {
    return (
      <Perf title={this.state.title} symbols={this.state.symbols} />
    );
  }
}

PerfContainer.propTypes = {
  title: PropTypes.string.isRequired,
  tickers: PropTypes.array.isRequired,
};

export default PerfContainer;
