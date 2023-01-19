import React from "react";
import styles from "./ModalHistoryBlock.module.css";

const ModalHistoryBlock = (props) => {
  return (
    <div>
      <div className={styles.area}> Amount: {props.amount}</div>
      <div className={styles.area}> Rate: {props.interest_rate}</div>
      <div className={styles.area}> Years: {props.number_of_years}</div>
      <div className={styles.area}>
        Monthly payment: {props.mounthlyPayment}
      </div>
      <div className={styles.area}>Loan Amount: {props.loanAmount}</div>
      <div className={styles.area}>
        Loan Overpayment: {props.loanOverpayment}
      </div>
      {/* хочу при нажатии на конкретное поле переходить на страницу с формулой рассчета этого поля */}
    </div>
  );
};

export default ModalHistoryBlock;
