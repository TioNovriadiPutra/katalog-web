import Image from "next/image";
import styles from "./index.module.css";
import React, { useState } from "react";

const Combobox = ({ listData, current, onPick }) => {
  const [show, setShow] = useState(false);

  const onHandleShow = () => {
    setShow(!show);
  };

  const onHandlePick = (index) => {
    onPick(index);
    setShow(false);
  };

  return (
    <div className={styles.container}>
      <p className={`log ${styles.current}`}>{current.label}</p>

      <Image
        src={require("@/assets/images/combo.png")}
        className={styles.icon}
        onClick={onHandleShow}
      />

      {show && (
        <div className={styles.menuContainer}>
          {listData.map((item, index) => (
            <p key={index.toString()} onClick={() => onHandlePick(index)}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Combobox;
