import Combobox from "../combobox";
import ServiceBody from "../service-body";
import styles from "./index.module.css";
import React, { useState } from "react";

const ServiceExample = ({ responseData }) => {
  const [current, setCurrent] = useState(0);

  const onHandlePick = (index) => {
    setCurrent(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Example</h1>

        <Combobox
          listData={responseData.map((item) => item.label)}
          current={responseData[current]}
          onPick={onHandlePick}
        />
      </div>

      <ServiceBody
        title="Request"
        type="subTitle"
        bodyData={responseData[current].reqBody}
      />

      <ServiceBody
        title="Response"
        type="subTitle"
        bodyData={responseData[current].rsBody}
      />
    </div>
  );
};

export default ServiceExample;
