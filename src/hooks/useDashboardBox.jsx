import { monitorSelector } from "@/models/logModel";
import { currentServiceState } from "@/store/pageState";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const useDashboardBox = () => {
  const [currentHeight, setCurrentHeight] = useState(0);

  const [currentService, setCurrentService] =
    useRecoilState(currentServiceState);
  const setMonitor = useSetRecoilState(monitorSelector);

  const boxRef = useRef(null);

  const onHandleClick = (item) => {
    setCurrentService({
      service: item.row[0].value,
      log: item.monitor.logaddress,
    });
    setMonitor({
      logCpu: {
        service: item.row[0].value,
        data: item.monitor.cpu,
      },
      logMemory: {
        service: item.row[0].value,
        data: item.monitor.memory,
      },
    });
  };

  useEffect(() => {
    setCurrentHeight(boxRef.current.offsetHeight);
  }, []);

  return {
    currentHeight,
    currentService,
    boxRef,
    onHandleClick,
  };
};

export default useDashboardBox;
