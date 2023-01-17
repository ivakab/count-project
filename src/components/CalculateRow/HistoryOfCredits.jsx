import React from "react";
import { useDispatch } from "react-redux";
import { deleteCalculationFromHistory } from "../../redux/credit-reducer";
import styles from "./HistoryOfCredits.module.css";

const HistoryOfCredits = (props) => {
  const dispatch = useDispatch();

  const deleteCredit = (index) => {
    dispatch(deleteCalculationFromHistory(index));
  };
  return (
    <div className={styles.history}>
      {props.history.map((h, index) => {
        return (
          <div
            key={index}
            className={styles.historyBlock}
            onClick={() => deleteCredit(index)}
          >
            <div>{index + 1} credit</div>
            <div> Amount: {h.amount}</div>
            <div> Rate: {h.interest_rate}</div>
            <div> Years: {h.number_of_years}</div>
            <div> Monthly payment: {h.mounthlyPayment}</div>
            <div> Loan Amount: {h.loanAmount}</div>
            <div>Loan Overpayment: {h.loanOverpayment}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryOfCredits;
