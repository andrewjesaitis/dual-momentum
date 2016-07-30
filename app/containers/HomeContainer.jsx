import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from '../styles/styles';
import tickers from '../config/tickers';
import PerfContainer from './PerfContainer';
import PortfolioContainer from './PortfolioContainer';
import { fetchStocks } from '../redux/stocks';

class Home extends Component {
  componentWillMount() {
    this.props.fetchStocks();
  }

  render() {
    return (
      <div>
        <div className="row row-centered">
          <PerfContainer title={"Equites"} tickers={tickers.equities} />
          <PerfContainer title={"Credit Risk"} tickers={tickers.credit} />
          <PerfContainer title={"Real Estate"} tickers={tickers.realEstate} />
          <PerfContainer title={"Economic Stress"} tickers={tickers.econ} />
        </div>
        <div className="row row-centered">
          <PortfolioContainer />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStocks }, dispatch);
}

function mapStateToProps({ stocks }) {
  return {
    isLoading: stocks.isFetching
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
