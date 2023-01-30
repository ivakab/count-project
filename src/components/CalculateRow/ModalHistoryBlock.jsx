import React from "react";
import { useSelector } from "react-redux";
import styles from "./ModalHistoryBlock.module.css";

const ModalHistoryBlock = (props) => {
  return (
    <div>
      <div className={styles.area}> Amount: {props.element.amount}</div>
      <div className={styles.area}> Rate: {props.element.interest_rate}</div>
      <div className={styles.area}> Years: {props.element.number_of_years}</div>
      <div className={styles.area}>
        Monthly payment: {props.element.mounthlyPayment}
      </div>
      <div className={styles.area}>Loan Amount: {props.element.loanAmount}</div>
      <div className={styles.area}>
        Loan Overpayment: {props.element.loanOverpayment}
      </div>

      <button
        disabled={props.index === 0}
        className={styles.historyBtn}
        onClick={() => props.setSelectedID(props.index - 1)}
      >
        &lt;
      </button>

      <button
        disabled={props.index === props.length - 1}
        className={styles.historyBtn}
        onClick={() => props.setSelectedID(props.index + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default ModalHistoryBlock;
