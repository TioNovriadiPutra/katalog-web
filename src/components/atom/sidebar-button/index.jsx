import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarButton = ({ buttonData, active }) => {
  return (
    <Link
      href={buttonData.destination}
      className={`${styles.buttonContainer} ${
        active && styles.buttonContainerActive
      }`}
    >
      <Image
        src={active ? buttonData.active : buttonData.inactive}
        alt="dashboard-icon"
      />

      <p
        className={`${styles.label} ${
          active ? styles.labelActive : styles.labelInactive
        }`}
      >
        {buttonData.label}
      </p>
    </Link>
  );
};

export default SidebarButton;
