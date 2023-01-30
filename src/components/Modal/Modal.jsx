import React from "react";
import "./Modal.css";

const Modal = ({ active, onClose, children }) => {
  if (!active) {
    return <></>;
  }
  return (
    <div className={active ? "modal active" : "modal"} onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
