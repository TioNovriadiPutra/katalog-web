"use client";

import { sideBarMenu } from "@/constants/page";
import styles from "./index.module.css";
import React from "react";
import SidebarButton from "../../atom/sidebar-button";
import useCustomSidebar from "@/hooks/useCustomSidebar";

const CustomSideBar = () => {
  const { current } = useCustomSidebar();

  return (
    <div className={styles.container}>
      {sideBarMenu.map((item, index) => (
        <SidebarButton
          key={index.toString()}
          buttonData={item}
          active={item.destination === current}
        />
      ))}
    </div>
  );
};

export default CustomSideBar;
