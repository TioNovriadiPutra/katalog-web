import styles from "./index.module.css";
import { Spinner } from "evergreen-ui";
import React from "react";

const CustomSpinner = () => {
  return (
    <div className={styles.container}>
      <Spinner size={32} />
    </div>
  );
};

export default CustomSpinner;
