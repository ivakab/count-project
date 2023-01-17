import React, { useCallback, useState } from "react";
import styles from "./CalculateRow.module.css";
import HistoryOfCredits from "./HistoryOfCredits";
import Input from "./Input";

const CalculateRow = (props) => {
  const [show, showHistory] = useState(false);

  const setShowHistory = useCallback(() => {
    showHistory(!show);
  }, [show]);

  return (
    <div className={styles.task}>
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
      </div>
      <div>
        <button className={styles.btn} onClick={props.countResult}>
          Calculate
        </button>
        <button className={styles.btnHistory} onClick={setShowHistory}>
          Show history of counting:
        </button>
        {show && <HistoryOfCredits history={props.history} />}
      </div>
    </div>
  );
};

export default CalculateRow;
