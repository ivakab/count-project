import React from "react";
import styles from "./Tasks.module.css";

const RateBTC = (props) => {
  return <span className={styles.price}>{props.price}</span>;
};

export default RateBTC;
