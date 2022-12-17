import { useAtom } from "jotai";
import { useEffect } from "react";
import { Insomnia } from "@awesome-cordova-plugins/insomnia";

import { useStore } from "../store/Store";

export const useWakelock = () => {
  const { enabled } = useStore();
  const [isAppEnabled] = useAtom(enabled);

  useEffect(() => {
    if (isAppEnabled) {
      (async () => await Insomnia.keepAwake())();
    } else {
      (async () => await Insomnia.allowSleepAgain())();
    }
  }, [isAppEnabled]);

  useEffect(() => {
    return () => {
      (async () => await Insomnia.allowSleepAgain())();
    };
  }, []);
};
