import Image from "next/image";
import styles from "./index.module.css";
import React from "react";

const TerminalSidebarButton = ({ icon }) => {
  return (
    <div className={styles.container}>
      <Image src={icon} className={styles.icon} />
    </div>
  );
};

export default TerminalSidebarButton;
