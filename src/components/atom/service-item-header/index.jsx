import styles from "./index.module.css";
import React from "react";

const ServiceItemHeader = ({ title, method, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.method}>{method}</h1>
        <h1 className={styles.service}>{title}</h1>
      </div>

      <h6 className={styles.service}>{url}</h6>
    </div>
  );
};

export default ServiceItemHeader;
