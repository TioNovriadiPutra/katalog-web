import TerminalCloseButton from "@/components/atom/terminal-close-button";
import styles from "./index.module.css";
import React from "react";
import TerminalSidebarButton from "@/components/atom/terminal-sidebar-button";

const TerminalLeftBar = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <TerminalCloseButton onClose={onClose} />

      <TerminalSidebarButton
        icon={require("@/assets/images/terminalSmall.png")}
      />
    </div>
  );
};

export default TerminalLeftBar;
