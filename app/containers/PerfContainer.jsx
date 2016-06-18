import axios from 'axios';
import React, { Component, PropTypes } from 'react';
import Loading from '../components/Loading';
import Perf from '../components/Perf';
import api from '../helpers/api';

class PerfContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      symbols: [],
    };
  }
  componentWillMount() {
    const symbols = axios.all(this.props.tickers.map(t => api.getQuote(t)))
                         .then(resArr => {
                           resArr.sort(function(first, second) {
                             return first.annualReturn < second.annualReturn ? 1 : -1;
                           });
                           console.log(resArr);
                           this.setState({
                             symbols: resArr,
                             isLoading: false,
                           });
                         });
  }
  render() {
    return (
      <Perf
        title={this.props.title}
        symbols={this.state.symbols}
        isLoading={this.state.isLoading} 
      />
    );
  }
}

PerfContainer.propTypes = {
  title: PropTypes.string.isRequired,
  tickers: PropTypes.array.isRequired,
};

export default PerfContainer;
