import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./HistoryOfCredits.module.css";
import HistoryOfCreditsBlock from "./HistoryOfCreditsBlock";
import ModalHistoryBlock from "./ModalHistoryBlock";

const HistoryOfCredits = (props) => {
  const [selectedID, setSelectedID] = useState(-1);

  useEffect(() => {
    console.log("selectedID: ", selectedID);
  }, [selectedID]);
  return (
    <div className={styles.history}>
      {props.history.map((element, index) => {
        return (
          <HistoryOfCreditsBlock
            key={index}
            element={element}
            index={index}
            onClick={() => {
              setSelectedID(index);
            }}
          />
        );
      })}
      <Modal active={selectedID !== -1} onClose={() => setSelectedID(-1)}>
        <ModalHistoryBlock
          element={props.history[selectedID]}
          index={selectedID}
          setSelectedID={setSelectedID}
          length={props.history.length}
        />
      </Modal>
    </div>
  );
};

export default HistoryOfCredits;
