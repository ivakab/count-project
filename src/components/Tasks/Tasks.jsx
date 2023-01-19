import React, { useCallback, useEffect, useState } from "react";
import CreditContainer from "../Credit/CreditContainer";
import DepositContainer from "../Deposit/DepositContainer";
import styles from "./Tasks.module.css";
import { PriceApi } from "../api/PriceApi.js";
import { Routes, Route, Link } from "react-router-dom";
import { Navigation } from "./Navigation";
import RateBTC from "./RateBTC";

const Tasks = () => {
  const [price, setPrice] = useState(null);

  const [show, showPrice] = useState(false);

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
      <div className={styles.taskMode}>
        <Routes>
          <Route path="/" element={<Navigation />} className={styles.links}>
            <Route index element={<CreditContainer />} />
            <Route path="deposit" element={<DepositContainer />} />
          </Route>
        </Routes>
      </div>
      <div className={styles.rate}>
        <button className={styles.btnRate} onClick={setShowPrice}>
          See the rate
        </button>
        {show && <RateBTC price={price} />}
      </div>
    </div>
  );
};

export default Tasks;
