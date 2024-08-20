"use client";

import useLogController from "@/controllers/logController";
import { terminalSelector } from "@/models/logModel";
import { showTerminalState } from "@/store/pageState";
import { useState } from "react";
import { useRecoilState } from "recoil";

const useTerminal = () => {
  const [showTerminal, setShowTerminal] = useRecoilState(showTerminalState);
  const [terminal, setTerminal] = useRecoilState(terminalSelector);

  const [remark, setRemark] = useState("");

  const { searchPM2LogService } = useLogController();

  const onHandleClose = () => {
    setShowTerminal(false);
    setTerminal({ data: [] });
    setRemark("");
  };

  const onHandleChange = (e) => {
    e.preventDefault();
    setRemark(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    searchPM2LogService(remark);
  };

  return {
    showTerminal,
    terminal,
    onHandleClose,
    onTextInput: {
      remark,
      onHandleChange,
      onHandleSubmit,
    },
  };
};

export default useTerminal;
