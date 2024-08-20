import { useEffect, useState } from "react";

const useCustomSidebar = () => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const handlePathChange = () => {
      setCurrent(window.location.pathname);
    };

    handlePathChange();

    window.addEventListener("popstate", handlePathChange);

    const pushState = history.pushState;
    const replaceState = history.replaceState;

    history.pushState = function (...args) {
      pushState.apply(history, args);
      handlePathChange();
    };

    history.replaceState = function (...args) {
      replaceState.apply(history, args);
      handlePathChange();
    };

    return () => {
      window.removeEventListener("popstate", handlePathChange);
      history.pushState = pushState;
      history.replaceState = replaceState;
    };
  }, []);

  return {
    current,
  };
};

export default useCustomSidebar;
