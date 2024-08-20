"use client";

import {
  logServiceSelector,
  monitorSelector,
  terminalSelector,
} from "@/models/logModel";
import {
  getPM2Log,
  getPM2Status,
  startPM2,
  stopPM2,
} from "@/services/logService";
import { currentServiceState } from "@/store/pageState";
import moment from "moment";
import { useRecoilState, useSetRecoilState } from "recoil";

const useLogController = () => {
  const [currentService, setCurrentService] =
    useRecoilState(currentServiceState);
  const setLogService = useSetRecoilState(logServiceSelector);
  const setMonitor = useSetRecoilState(monitorSelector);
  const setTerminal = useSetRecoilState(terminalSelector);

  const getPM2StatusService = async (withLoading = true) => {
    if (withLoading) {
      setLogService({ loading: true });
    }

    await getPM2Status()
      .then((response) => {
        const data = response.data
          .map((item) => {
            const arr = [
              {
                size: "large",
                value: item.name,
              },
              {
                size: "medium",
                value: item.pm2_env.restart_time,
              },
              {
                size: "medium",
                value: item.pm2_env.instance,
              },
              {
                size: "medium",
                value: moment(item.pm2_env.pm_uptime).fromNow(),
              },
              {
                size: "status",
                value: item.pm2_env.status,
              },
            ];

            return {
              row: arr,
              extra: "switch",
              monitor: {
                cpu: item.monit.cpu,
                memory: item.monit.memory,
                name: item.name,
                status: item.pm2_env.status,
                logaddress: item.pm2_env.pm_out_log_path,
              },
              lock: arr[0].value === "gate-sandbox",
              onStop: async () =>
                await stopPM2Service({ apiname: arr[0].value }),
              onStart: async () =>
                await startPM2Service({ apiname: arr[0].value }),
            };
          })
          .sort((a, b) => {
            var nameA = a.row[0].value.toUpperCase();
            var nameB = b.row[0].value.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;
          })
          .filter(
            (obj, index, self) =>
              index ===
              self.findIndex((o) => o.monitor.name === obj.monitor.name)
          );

        setLogService({ data });
        setMonitor({
          logCpu: {
            service: data[0].row[0].value,
            data: data[0].monitor.cpu,
          },
          logMemory: {
            service: data[0].row[0].value,
            data: data[0].monitor.memory,
          },
        });
        setCurrentService({
          service: data[0].row[0].value,
          log: data[0].monitor.logaddress,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLogService({ loading: false });
      });
  };

  const getPM2LogService = async () => {
    setTerminal({ loading: true });

    await getPM2Log({
      logaddress: currentService.log,
      remark: "",
    })
      .then((response) => {
        let logData = [];

        if (response.data) {
          logData = response.data.split("\n");
          logData = logData.map((log) => {
            let strItem = log.trim();
            const item = {
              timestamp: strItem.substring(0, 23),
              desc: strItem.slice(25),
            };

            return item;
          });
        }

        setTerminal({ data: logData });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTerminal({ loading: false });
      });
  };

  const searchPM2LogService = async (data) => {
    setTerminal({ loading: true });

    await getPM2Log({ logaddress: currentService.log, remark: data })
      .then((response) => {
        let logData = [];

        if (response.data) {
          logData = response.data.split("\n");
          logData = logData.map((log) => {
            let strItem = log.trim();
            const item = {
              timestamp: strItem.substring(0, 23),
              desc: strItem.slice(25),
            };

            return item;
          });
        }

        setTerminal({ data: logData });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTerminal({ loading: false });
      });
  };

  const stopPM2Service = async (data) => {
    await stopPM2(data)
      .then(async () => {
        await getPM2StatusService(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const startPM2Service = async (data) => {
    await startPM2(data)
      .then(async () => {
        await getPM2StatusService(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    getPM2StatusService,
    getPM2LogService,
    searchPM2LogService,
  };
};

export default useLogController;
