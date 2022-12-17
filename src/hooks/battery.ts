import { useEffect, useRef, useState } from "react";
import { Subscription } from "rxjs";
import { BatteryStatus } from "@awesome-cordova-plugins/battery-status";

export const useBatterySaver = (enableFeature: boolean) => {
  const batteryRef = useRef<Subscription | undefined>();
  const [isBatterySaverEnabled, setIsBatterySaverEnabled] = useState(false);

  useEffect(() => {
    if (enableFeature) {
      batteryRef.current = BatteryStatus.onChange().subscribe((status) => {
        if (status.isPlugged) {
          setIsBatterySaverEnabled(false);
        } else {
          if (status.level <= 15) {
            setIsBatterySaverEnabled(true);
          } else {
            setIsBatterySaverEnabled(false);
          }
        }
      });

      return () => batteryRef.current?.unsubscribe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isBatterySaverEnabled };
};
