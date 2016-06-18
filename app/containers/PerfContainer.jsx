import axios from 'axios';
import React, { Component, PropTypes } from 'react';
import Perf from '../components/Perf';
import api from '../helpers/api';

class PerfContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      symbols: [{ symbol: '', currentPrice: 0, annualReturn: 0 }],
    };
  }
  componentWillMount() {
    const symbols = axios.all(this.props.tickers.map(t => api.getQuote(t)))
                         .then(resArr => {
                           resArr.sort(function(first, second) {
                             return first.annualReturn < second.annualReturn ? 1 : -1;
                           });
                           console.log(resArr);
                           this.setState({ symbols: resArr });
                         });
                           
    this.setState({ title: this.props.title });
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
