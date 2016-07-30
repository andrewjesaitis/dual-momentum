import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recordValue } from '../redux/portfolio';
import Settings from '../components/Settings';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 100000, leverage: 1.0 };
    this.wrapValueUpdate = _.throttle(this.wrapValueUpdate, 1000);
  }

  wrapValueUpdate(amount, leverage) {
    this.props.recordValue(amount, leverage);
  }

  handleAmountChange(event) {
    const amount = parseFloat(event.target.value);
    this.setState({ amount });
    this.wrapValueUpdate(amount, this.state.leverage);
  }

  handleLeverageChange(event) {
    const leverage = parseFloat(event.target.value);
    this.setState({ leverage });
    this.wrapValueUpdate(this.state.amount, leverage);
  }

  render() {
    return (
      <Settings
        amount={this.state.amount}
        leverage={this.state.leverage}
        handleAmountChange={event => this.handleAmountChange(event)}
        handleLeverageChange={event => this.handleLeverageChange(event)}
      />
    );
  }
}

SettingsContainer.propTypes = {
  recordValue: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ recordValue }, dispatch);
}

function mapStateToProps({ portfolio }) {
  return {
    amount: portfolio.amount,
    leverage: portfolio.leverage,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
