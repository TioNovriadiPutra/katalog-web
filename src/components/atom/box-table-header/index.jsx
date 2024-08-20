import styles from "./index.module.css";
import React from "react";

const BoxTableHeader = ({ headerData }) => {
  return (
    <div className={styles.container}>
      {headerData.map((item, index) => (
        <h5
          key={index.toString()}
          className={`${styles.label} ${
            item.size === "large" ? styles.labelLarge : styles.labelMedium
          }`}
        >
          {item.label}
        </h5>
      ))}
    </div>
  );
};

export default BoxTableHeader;
