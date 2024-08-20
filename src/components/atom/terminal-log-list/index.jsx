import ScrollContainer from "@/containers/scroll-container";
import styles from "./index.module.css";
import React from "react";

const TerminalLogList = ({ logData }) => {
  return (
    <ScrollContainer
      containerStyles={styles.container}
      scrollContainerStyles={styles.scrollContainer}
    >
      {logData.map((log, index) => (
        <div key={index.toString()} className={styles.row}>
          <div className={styles.timestampContainer}>
            <p className={`log ${styles.text} ${styles.timestamp}`}>
              {log.timestamp}
            </p>
          </div>

          <div className={styles.descContainer}>
            <h6 className={`${styles.text} ${styles.desc}`}>{log.desc}</h6>
          </div>
        </div>
      ))}
    </ScrollContainer>
  );
};

export default TerminalLogList;
