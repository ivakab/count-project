import React from "react";

const Credit = (props) => {
  return (
    <div>
      <div>Your monthly payment: {props.mounthlyPayment}</div>
      <div>Total loan amount: {props.loanAmount}</div>
      <div>The amount of your overpayment: {props.loanOverpayment}</div>
    </div>
  );
};

export default Credit;
