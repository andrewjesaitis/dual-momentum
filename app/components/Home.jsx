import React from 'react';
import * as styles from '../styles/styles';
import tickers from '../config/tickers';
import PerfContainer from '../containers/PerfContainer';

function Home() {
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

export default Home;
