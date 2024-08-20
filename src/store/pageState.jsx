import { atom } from "recoil";

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});

export const currentServiceState = atom({
  key: "currentServiceState",
  default: null,
});

export const showTerminalState = atom({
  key: "showTerminalState",
  default: false,
});
