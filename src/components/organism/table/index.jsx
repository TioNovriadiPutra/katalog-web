import BoxTable from "@/components/molecule/box-table";
import styles from "./index.module.css";
import React from "react";

const Table = ({ tableData }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{tableData.title}</h2>

      <BoxTable
        tableData={{
          header: tableData.headerData,
          table: tableData.tableData,
        }}
      />
    </div>
  );
};

export default Table;
