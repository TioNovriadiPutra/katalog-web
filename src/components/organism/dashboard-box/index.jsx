import BoxTable from "@/components/molecule/box-table";
import styles from "./index.module.css";
import React from "react";
import CustomSpinner from "@/components/atom/spinner";
import BoxProgress from "@/components/molecule/box-progress";
import useDashboardBox from "@/hooks/useDashboardBox";

const DashboardBox = ({ boxData }) => {
  const { currentHeight, currentService, boxRef, onHandleClick } =
    useDashboardBox();

  return (
    <div ref={boxRef} className={styles.container}>
      <h2 className={styles.title}>{boxData.title}</h2>

      {boxData.type === "chart" && (
        <h6 className={styles.subTitle}>{boxData.monitor.service}</h6>
      )}

      {boxData.type === "table" ? (
        boxData.logService.loading ? (
          <CustomSpinner />
        ) : (
          <BoxTable
            tableData={{
              header: boxData.headerData,
              table: boxData.logService.data,
            }}
            current={currentService}
            onClickRow={onHandleClick}
          />
        )
      ) : boxRef.current ? (
        <BoxProgress
          progressData={
            boxData.monitor.data > 100
              ? Math.floor((boxData.monitor.data / 1000000 / 524.288) * 100)
              : boxData.monitor.data
          }
          height={currentHeight}
        />
      ) : null}
    </div>
  );
};

export default DashboardBox;
