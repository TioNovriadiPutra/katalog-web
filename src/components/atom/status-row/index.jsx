import styles from "./index.module.css";
import React from "react";

const StatusRow = ({ rowData }) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.secondContainer} ${
          rowData.value === "online"
            ? styles.secondContainerOnline
            : styles.secondContainerOffline
        }`}
      >
        <div
          className={`${styles.circle} ${
            rowData.value === "online"
              ? styles.circleOnline
              : styles.circleOffline
          }`}
        />

        <h4
          className={
            rowData.value === "online"
              ? styles.labelOnline
              : styles.labelOffline
          }
        >
          {rowData.value === "online" ? "Online" : "Offline"}
        </h4>
      </div>
    </div>
  );
};

export default StatusRow;
