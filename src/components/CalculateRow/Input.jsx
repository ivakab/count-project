import React from "react";
import styles from "./CalculateRow.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <input
        className={styles.inputValue}
        type="number"
        value={props.value || ""}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder={props.text}
      />
    </div>
  );
};

export default Input;
