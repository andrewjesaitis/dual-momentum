import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recordValue } from '../redux/portfolio';

class ValueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 100000, leverage: 1.0 };
    this.wrapValueUpdate = _.throttle(this.wrapValueUpdate, 700);
  }

  wrapValueUpdate(amount, leverage) {
    this.props.recordValue(amount, leverage);
  }

  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
    this.wrapValueUpdate(event.target.value, this.state.leverage);
  }

  handleLeverageChange(event) {
    this.setState({ leverage: event.target.value });
    this.wrapValueUpdate(this.state.amount, event.target.value);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="amountInput">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amountInput"
            onChange={(event) => this.handleAmountChange(event)}
            value={this.state.amount}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leverageInput">Leverage</label>
          <input
            type="number"
            className="form-control"
            id="leverageInput" onChange={(event) => this.handleLeverageChange(event)}
            value={this.state.leverage}
          />
        </div>
      </form>
    );
  }
}

ValueContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ValueContainer);
