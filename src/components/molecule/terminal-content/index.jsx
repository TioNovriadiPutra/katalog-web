import TerminalTopBar from "@/components/atom/terminal-top-bar";
import styles from "./index.module.css";
import React from "react";
import CustomSpinner from "@/components/atom/spinner";
import TerminalLogList from "@/components/atom/terminal-log-list";
import TerminalSearchInput from "@/components/atom/terminal-search-input";

const TerminalContent = ({ terminalData, onTextInput }) => {
  return (
    <div className={styles.container}>
      <TerminalTopBar />

      {terminalData.loading ? (
        <CustomSpinner />
      ) : (
        <TerminalLogList logData={terminalData.data} />
      )}

      <TerminalSearchInput onTextInput={onTextInput} />
    </div>
  );
};

export default TerminalContent;
