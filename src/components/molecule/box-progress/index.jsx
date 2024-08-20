import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./index.module.css";
import React from "react";

const BoxProgress = ({ progressData, height }) => {
  return (
    <div className={styles.main}>
      <div className={`${styles.container}`} style={{ height: height - 90.84 }}>
        <CircularProgressbar
          value={progressData}
          maxValue={100}
          text={`${progressData}%`}
          className={styles.progress}
          styles={buildStyles({
            pathColor: "#58BE62",
            strokeLinecap: "round",
            textColor: "#A7A7A7",
          })}
        />
      </div>
    </div>
  );
};

export default BoxProgress;
