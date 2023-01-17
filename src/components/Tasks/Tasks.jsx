import React, { useCallback, useEffect, useState } from "react";
import CreditContainer from "../Credit/CreditContainer";
import DepositContainer from "../Deposit/DepositContainer";
import styles from "./Tasks.module.css";
import { PriceApi } from "../api/PriceApi.js";

const Tasks = () => {
  const [taskMode, setTaskMode] = useState(true);

  const [price, setPrice] = useState(null);

  const [show, showPrice] = useState(false);

  const showCreditMode = useCallback(() => {
    setTaskMode(true);
  }, []);

  const showDepositMode = useCallback(() => {
    setTaskMode(false);
  }, []);

  const setShowPrice = useCallback(() => {
    showPrice(!show);
  }, [show]);

  useEffect(() => {
    PriceApi().then((res) => setPrice(res.bpi.USD.rate));
    setInterval(() => {
      PriceApi().then((res) => setPrice(res.bpi.USD.rate));
    }, 40000);
  }, []);

  return (
    <div className={styles.tasks}>
      <div className={styles.header}> Tasks:</div>
      <div className={styles.choose}>
        <button className={styles.btn} onClick={showCreditMode}>
          Calculate interest on a loan
        </button>
        <button className={styles.btn} onClick={showDepositMode}>
          Calculate interest on deposit
        </button>
      </div>
      <div className={styles.taskMode}>
        {taskMode && <CreditContainer />}
        {!taskMode && <DepositContainer />}
      </div>
      <div className={styles.rate}>
        <button className={styles.btnRate} onClick={setShowPrice}>
          See the rate
        </button>
        {show && price}
      </div>
    </div>
  );
};

export default Tasks;
