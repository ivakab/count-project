import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCalculationFromHistory } from "../../redux/credit-reducer";
import Modal from "../Modal/Modal";
import styles from "./HistoryOfCredits.module.css";
import ModalHistoryBlock from "./ModalHistoryBlock";

const HistoryOfCreditsBlock = (props) => {
  const dispatch = useDispatch();

  const deleteCredit = (index) => {
    dispatch(deleteCalculationFromHistory(index));
  };

  const [setModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        key={props.index}
        className={styles.historyBlock}
        onClick={() => setShowModal(true)}
      >
        <div>{props.index + 1} credit</div>
        <div> Amount: {props.element.amount}</div>
        <div> Rate: {props.element.interest_rate}</div>
        <div> Years: {props.element.number_of_years}</div>
        <button
          className={styles.btn}
          onClick={(e) => {
            e.stopPropagation();
            deleteCredit(props.index);
          }}
        >
          Delete
        </button>
      </div>
      <Modal active={setModal} setActive={setShowModal}>
        {<ModalHistoryBlock {...props.element} />}
      </Modal>
    </div>
  );
};

export default HistoryOfCreditsBlock;
