"use client";

import TerminalLeftBar from "@/components/molecule/terminal-left-bar";
import styles from "./index.module.css";
import React from "react";
import TerminalContent from "@/components/molecule/terminal-content";
import useTerminal from "@/hooks/useTerminal";
import { motion } from "framer-motion";

const Terminal = () => {
  const { showTerminal, terminal, onHandleClose, onTextInput } = useTerminal();

  return (
    <motion.div
      className={styles.container}
      animate={{
        width: showTerminal ? 633 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <TerminalLeftBar onClose={onHandleClose} />

      <TerminalContent terminalData={terminal} onTextInput={onTextInput} />
    </motion.div>
  );
};

export default Terminal;
