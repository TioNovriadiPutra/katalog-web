"use client";

import Image from "next/image";
import styles from "./index.module.css";
import React from "react";
import { useSetRecoilState } from "recoil";
import { showTerminalState } from "@/store/pageState";
import useLogController from "@/controllers/logController";

const TerminalButton = () => {
  const setShowTerminal = useSetRecoilState(showTerminalState);

  const { getPM2LogService } = useLogController();

  const onHandleClick = () => {
    setShowTerminal(true);
    getPM2LogService();
  };

  return (
    <div className={styles.container} onClick={onHandleClick}>
      <Image
        src={require("@/assets/images/terminal.png")}
        className={styles.icon}
      />
    </div>
  );
};

export default TerminalButton;
