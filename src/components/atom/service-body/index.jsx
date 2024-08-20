import styles from "./index.module.css";
import React from "react";

const ServiceBody = ({ title, bodyData, type = "title" }) => {
  return (
    <div>
      <h1 className={type === "title" ? styles.title : styles.subTitle}>
        {title}
      </h1>

      <div className={styles.bodyContainer}>
        <pre className={styles.body}>{bodyData}</pre>
      </div>
    </div>
  );
};

export default ServiceBody;
