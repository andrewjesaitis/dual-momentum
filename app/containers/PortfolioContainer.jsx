import React, { Component, PropTypes } from 'react';
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
    return (
      <div className="col-xs-12" style={styles.hcenter}>
        <div className="well col-xs-8" style={styles.hcenter}>
          {JSON.stringify(this.props.securities, null, 2)}
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
