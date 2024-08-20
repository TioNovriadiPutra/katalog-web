import { Switch, ThemeProvider } from "evergreen-ui";
import styles from "./index.module.css";

import React, { useEffect, useState } from "react";
import customTheme from "@/configs/theme";
import Image from "next/image";

const SwitchRow = ({ status, lock, onStop, onStart }) => {
  const [checked, setChecked] = useState(false);

  const onHandleSwitch = async () => {
    if (checked) {
      await onStop().then(() => {
        setChecked(false);
      });
    } else {
      await onStart().then(() => {
        setChecked(true);
      });
    }
  };

  useEffect(() => {
    if (status === "online") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [status]);

  return (
    <ThemeProvider value={customTheme}>
      <div className={styles.container}>
        {lock ? (
          <Image
            src={require("@/assets/images/lock.png")}
            className={styles.lock}
          />
        ) : (
          <Switch
            appearance="main"
            height={22}
            checked={checked}
            onChange={onHandleSwitch}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default SwitchRow;
