import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCalculationFromHistory } from "../../redux/credit-reducer";
import Modal from "../Modal/Modal";
import styles from "./HistoryOfCredits.module.css";
import HistoryOfCreditsBlock from "./HistoryOfCreditsBlock";

const HistoryOfCredits = (props) => {
  const dispatch = useDispatch();

  const deleteCredit = (index) => {
    dispatch(deleteCalculationFromHistory(index));
  };

  const [setModal, setShowModal] = useState(false);

  return (
    <div className={styles.history}>
      {props.history.map((element, index) => {
        return <HistoryOfCreditsBlock element={element} index={index} />;
      })}
    </div>
  );
};

export default HistoryOfCredits;
