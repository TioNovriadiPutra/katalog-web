import BoxTableHeader from "@/components/atom/box-table-header";
import styles from "./index.module.css";
import React from "react";
import BoxTableRow from "@/components/atom/box-table-row";
import ScrollContainer from "@/containers/scroll-container";

const BoxTable = ({ tableData, current, onClickRow }) => {
  return (
    <div className={styles.container}>
      <BoxTableHeader headerData={tableData.header} />

      <ScrollContainer containerStyles={styles.scrollContainer}>
        {tableData.table.map((item, index) => (
          <BoxTableRow
            key={index.toString()}
            rowData={item}
            active={current ? item.row[0].value === current.service : false}
            onClick={() => {
              if (onClickRow) {
                onClickRow(item);
              }
            }}
          />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default BoxTable;
