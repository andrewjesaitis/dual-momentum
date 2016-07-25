import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from '../styles/styles';
import tickers from '../config/tickers';
import PerfContainer from './PerfContainer';
import Loading from '../components/Loading';
import { fetchStocks } from '../redux/stocks';

class Home extends Component {
  componentWillMount() {
    this.props.fetchStocks();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12" style={styles.hcenter}>
            <div className="col-xs-4">
              <PerfContainer title={"Equites"} tickers={tickers.equities} />
            </div>
            <div className="col-xs-4">
              <PerfContainer title={"Credit Risk"} tickers={tickers.credit} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12" style={styles.hcenter}>
            <div className="col-xs-4">
              <PerfContainer title={"Real Estate"} tickers={tickers.realEstate} />
            </div>
            <div className="col-xs-4">
              <PerfContainer title={"Economic Stress"} tickers={tickers.econ} />
            </div>
          </div>
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
