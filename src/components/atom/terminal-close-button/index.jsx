import Image from "next/image";
import styles from "./index.module.css";
import React from "react";

const TerminalCloseButton = ({ onClose }) => {
  return (
    <button className={styles.container} onClick={() => onClose()}>
      <Image
        src={require("@/assets/images/close.png")}
        className={styles.icon}
      />
    </button>
  );
};

export default TerminalCloseButton;
