import React, { PropTypes } from 'react';

export default function Settings(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="amountInput">Amount</label>
        <input
          type="number"
          className="form-control"
          id="amountInput"
          onChange={props.handleAmountChange}
          value={props.amount}
        />
      </div>
      <div className="form-group">
        <label htmlFor="leverageInput">Leverage</label>
        <input
          type="number"
          className="form-control"
          id="leverageInput"
          onChange={props.handleLeverageChange}
          value={props.leverage}
        />
      </div>
    </form>
  );
}

Settings.propTypes = {
  amount: PropTypes.number.isRequired,
  leverage: PropTypes.number.isRequired,
  handleAmountChange: PropTypes.func.isRequired,
  handleLeverageChange: PropTypes.func.isRequired,
};










