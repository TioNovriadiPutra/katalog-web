import styles from "./index.module.css";
import React from "react";

const DocSpecHeader = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <h6 className={styles.title}>{description}</h6>
    </div>
  );
};

export default DocSpecHeader;
