import StatusRow from "../status-row";
import SwitchRow from "../switch-row";
import styles from "./index.module.css";
import React from "react";

const BoxTableRow = ({ rowData, active, onClick }) => {
  return (
    <div
      className={`${styles.container} ${active && styles.containerActive}`}
      onClick={onClick}
    >
      {rowData.row.map((item, index) => {
        if (item.size === "status") {
          return <StatusRow key={index.toString()} rowData={item} />;
        }

        return (
          <h6
            key={index.toString()}
            className={`${styles.label} ${
              item.size === "large" ? styles.labelLarge : styles.labelMedium
            }`}
          >
            {item.value}
          </h6>
        );
      })}

      {rowData.extra && rowData.extra === "switch" ? (
        <SwitchRow
          status={rowData.monitor.status}
          lock={rowData.lock}
          onStop={rowData.onStop}
          onStart={rowData.onStart}
        />
      ) : null}
    </div>
  );
};

export default BoxTableRow;
