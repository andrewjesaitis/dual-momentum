import React from 'react';
import * as styles from '../styles/styles';
import PerfContainer from '../containers/PerfContainer';

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12" style={styles.hcenter}>
          <div className="col-xs-4">
            <PerfContainer title={"Equites"} />
          </div>
          <div className="col-xs-4">
            <PerfContainer title={"Credit Risk"} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" style={styles.hcenter}>
          <div className="col-xs-4">
            <PerfContainer title={"Real Estate"} />
          </div>
          <div className="col-xs-4">
            <PerfContainer title={"Economic Stress"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
