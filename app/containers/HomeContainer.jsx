import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import tickers from '../config/tickers';
import PerfContainer from './PerfContainer';
import PortfolioContainer from './PortfolioContainer';
import Error from '../components/Error';
import { fetchStocks } from '../redux/stocks';

class Home extends Component {
  componentWillMount() {
    this.props.fetchStocks();
  }

  render() {
    if (_.has(this.props.error, 'status')) {
      return <Error />;
    }

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

Home.propTypes = {
  fetchStocks: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStocks }, dispatch);
}

function mapStateToProps({ stocks }) {
  return {
    error: stocks.error,
    isLoading: stocks.isFetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
