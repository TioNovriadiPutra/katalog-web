"use client";

import TerminalButton from "@/components/atom/terminal-button";
import styles from "./page.module.css";
import DashboardBox from "@/components/organism/dashboard-box";
import { cpuBox, memoryBox, serviceBox } from "@/constants/page";
import MainContainer from "@/containers/main-container";
import useLogController from "@/controllers/logController";
import { logServiceSelector, monitorSelector } from "@/models/logModel";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Terminal from "@/components/organism/terminal";

const HomePage = () => {
  const logService = useRecoilValue(logServiceSelector);
  const monitor = useRecoilValue(monitorSelector);

  const { getPM2StatusService } = useLogController();

  useEffect(() => {
    getPM2StatusService();
  }, []);

  return (
    <MainContainer containerStyles={styles.container}>
      <div className={styles.leftContainer}>
        <DashboardBox boxData={{ ...serviceBox, logService }} />
      </div>

      <div className={styles.rightContainer}>
        <DashboardBox boxData={{ ...cpuBox, monitor: monitor.logCpu }} />

        <DashboardBox boxData={{ ...memoryBox, monitor: monitor.logMemory }} />
      </div>

      <TerminalButton />

      <Terminal />
    </MainContainer>
  );
};

export default HomePage;
