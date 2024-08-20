import { atom, selector } from "recoil";

export const logServiceDataState = atom({
  key: "logServiceDataState",
  default: [],
});

export const terminalDataState = atom({
  key: "terminalDataState",
  default: [],
});

export const isLoadingTerminalState = atom({
  key: "isLoadingTerminalState",
  default: false,
});

export const isLoadingLogState = atom({
  key: "isLoadingLogState",
  default: false,
});

export const logCpuDataState = atom({
  key: "logCpuDataState",
  default: {
    service: "",
    data: 0,
  },
});

export const logMemoryDataState = atom({
  key: "logMemoryDataState",
  default: {
    service: "",
    data: 0,
  },
});

export const logServiceSelector = selector({
  key: "logServiceSelector",
  get: ({ get }) => {
    const data = get(logServiceDataState);
    const loading = get(isLoadingLogState);

    return {
      data,
      loading,
    };
  },
  set: ({ set }, newValue) => {
    if (newValue && newValue.data !== undefined) {
      set(logServiceDataState, newValue.data);
    }

    if (newValue && newValue.loading !== undefined) {
      set(isLoadingLogState, newValue.loading);
    }
  },
});

export const terminalSelector = selector({
  key: "terminalSelector",
  get: ({ get }) => {
    const data = get(terminalDataState);
    const loading = get(isLoadingTerminalState);

    return {
      data,
      loading,
    };
  },
  set: ({ set }, newValue) => {
    if (newValue && newValue.data !== undefined) {
      set(terminalDataState, newValue.data);
    }

    if (newValue && newValue.loading !== undefined) {
      set(isLoadingTerminalState, newValue.loading);
    }
  },
});

export const monitorSelector = selector({
  key: "monitorSelector",
  get: ({ get }) => {
    const logCpu = get(logCpuDataState);
    const logMemory = get(logMemoryDataState);

    return {
      logCpu,
      logMemory,
    };
  },
  set: ({ set }, newValue) => {
    set(logCpuDataState, newValue.logCpu);
    set(logMemoryDataState, newValue.logMemory);
  },
});
