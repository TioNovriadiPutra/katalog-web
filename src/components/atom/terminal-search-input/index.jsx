import styles from "./index.module.css";
import React from "react";

const TerminalSearchInput = ({ onTextInput }) => {
  return (
    <div className={styles.container}>
      <p className={`log ${styles.icon}`}>{">"}</p>

      <form onSubmit={onTextInput.onHandleSubmit}>
        <input
          value={onTextInput.remark}
          placeholder="Input here..."
          className={styles.search}
          onChange={onTextInput.onHandleChange}
        />
      </form>
    </div>
  );
};

export default TerminalSearchInput;
