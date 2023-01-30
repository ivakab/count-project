import React, { useCallback, useMemo, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./CalculateRow.module.css";
import HistoryOfCredits from "./HistoryOfCredits";
import Input from "./Input";

const CalculateRow = (props) => {
  const checkHistory = useSelector((state) => state.creditReducer.history);
  const [show, showHistory] = useState(false);

  useEffect(() => {
    if (!checkHistory.length) {
      showHistory(false);
    }
  }, [checkHistory.length]);

  const setShowHistory = useCallback(() => {
    showHistory(!show);
  }, [show]);

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <div className={styles.items}>
          <Input
            value={props.amount}
            setValue={props.setAmount}
            text={"Enter amount"}
          />
          <Input
            value={props.rate}
            setValue={props.setRate}
            text={"Enter interest"}
          />
          <Input
            value={props.years}
            setValue={props.setYears}
            text={"Enter numbers of years"}
          />
          <button className={styles.btn} onClick={props.countResult}>
            Calculate
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <button
          disabled={!checkHistory.length}
          className={styles.btnHistory}
          onClick={setShowHistory}
        >
          Show history of counting:
        </button>
        {show && <HistoryOfCredits history={props.history} />}
      </div>
    </div>
  );
};

export default CalculateRow;
