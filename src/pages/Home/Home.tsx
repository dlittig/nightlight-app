import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  playOutline as PlayOutlineIcon,
  stopOutline as StopOutlineIcon,
  settingsOutline as SettingsOutlineIcon,
} from "ionicons/icons";
import { useAtom } from "jotai";
import { useHistory } from "react-router";
import { Brightness } from "@ionic-native/brightness";
import { useCallback, useEffect, useRef } from "react";

import Intro from "../../components/Intro";
import { useStore } from "../../store/Store";
import { useWakelock } from "../../hooks/wakelock";
import { useBatterySaver } from "../../hooks/battery";

const Home = () => {
  const history = useHistory();
  const {
    enabled,
    colorSetting,
    batterySavingLimitSetting,
    maximumBrightnessSetting,
  } = useStore();
  const currentBrightnessRef = useRef<number | undefined>();
  const [isAppEnabled, setAppEnabled] = useAtom(enabled);
  const [isMaxmimumBrightnessEnabled] = useAtom(maximumBrightnessSetting);
  const [batterySaverSetting] = useAtom(batterySavingLimitSetting);
  const [color] = useAtom(colorSetting);
  const { isBatterySaverEnabled } = useBatterySaver(
    batterySaverSetting === "true"
  );
  useWakelock();

  const isActive = useCallback(() => {
    if (isAppEnabled) {
      if (batterySaverSetting === "true") {
        if (isBatterySaverEnabled) {
          return false;
        }

        return true;
      }

      return true;
    }

    return false;
  }, [isAppEnabled, isBatterySaverEnabled, batterySaverSetting]);

  useEffect(() => {
    if (isActive() && isMaxmimumBrightnessEnabled === "true") {
      Brightness.getBrightness().then(
        (value) => (currentBrightnessRef.current = value)
      );
      Brightness.setBrightness(1);
    } else {
      if (currentBrightnessRef.current) {
        Brightness.setBrightness(currentBrightnessRef.current);
        currentBrightnessRef.current = undefined;
      }
    }

    return () => {
      currentBrightnessRef.current &&
        Brightness.setBrightness(currentBrightnessRef.current);
      currentBrightnessRef.current = undefined;
    };
  }, [isActive, isMaxmimumBrightnessEnabled]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nightlight</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => history.push("/page/settings")}>
              <IonIcon icon={SettingsOutlineIcon}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent style={isActive() ? { "--background": color } : {}}>
        {!isActive() && <Intro />}
        <IonFab slot="fixed" horizontal="center" vertical="bottom">
          <IonFabButton onClick={() => setAppEnabled(!isAppEnabled)}>
            {isActive() ? (
              <IonIcon icon={StopOutlineIcon}></IonIcon>
            ) : (
              <IonIcon icon={PlayOutlineIcon}></IonIcon>
            )}
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
