import { atom, selector } from "recoil";

export const apiDataState = atom({
  key: "apiDataState",
  default: {
    title: "",
    description: "",
    services: [],
  },
});

export const apiIsLoadingState = atom({
  key: "apiIsLoadingState",
  default: false,
});

export const apiSelector = selector({
  key: "apiSelector",
  get: ({ get }) => {
    const data = get(apiDataState);
    const loading = get(apiIsLoadingState);

    return {
      data,
      loading,
    };
  },
  set: ({ set }, newValue) => {
    if (newValue && newValue.data !== undefined) {
      set(apiDataState, newValue.data);
    }

    if (newValue && newValue.loading !== undefined) {
      set(apiIsLoadingState, newValue.loading);
    }
  },
});
