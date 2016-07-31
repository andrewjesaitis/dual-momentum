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
          min="0"
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
          min="0"
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










