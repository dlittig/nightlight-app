import {
  IonIcon,
  IonItem,
  IonList,
  IonNote,
  IonPage,
  IonLabel,
  IonTitle,
  IonHeader,
  IonToggle,
  IonButton,
  IonButtons,
  IonContent,
  IonToolbar,
  IonBackButton,
} from "@ionic/react";
import {
  closeOutline as CloseOutlineIcon,
  createOutline as CreateOutlineIcon,
} from "ionicons/icons";
import { useAtom } from "jotai";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

import { useStore } from "../../store/Store";

import "./style.scss";

const Settings = () => {
  const {
    batterySavingLimitSetting,
    colorSetting,
    displayCareSetting,
    maximumBrightnessSetting,
  } = useStore();
  const [battery, setBattery] = useAtom(batterySavingLimitSetting);
  const [color, setColor] = useAtom(colorSetting);
  const [displayCare, setDisplayCare] = useAtom(displayCareSetting);
  const [useMaximumBrightness, setUseMaximumBrightness] = useAtom(
    maximumBrightnessSetting
  );
  const [isChoosingColor, setIsChoosingColor] = useState(false);

  return (
    <div className="Settings">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonList lines="full">
            <IonItem>
              <IonLabel>
                <h2>Color</h2>
                <IonNote className="ion-text-wrap" style={{ color }}>
                  {color}
                </IonNote>
              </IonLabel>
              {isChoosingColor ? (
                <IonButton
                  fill="outline"
                  color="dark"
                  shape="round"
                  onClick={() => setIsChoosingColor(false)}
                >
                  Close&nbsp;&nbsp;<IonIcon icon={CloseOutlineIcon}></IonIcon>
                </IonButton>
              ) : (
                <IonButton
                  fill="outline"
                  color="dark"
                  shape="round"
                  onClick={() => setIsChoosingColor(true)}
                >
                  Edit&nbsp;&nbsp;
                  <IonIcon icon={CreateOutlineIcon}></IonIcon>
                </IonButton>
              )}
            </IonItem>
            {isChoosingColor && (
              <IonItem>
                <div className="Settings__colorpicker">
                  <HexColorPicker color={color} onChange={setColor} />
                </div>
              </IonItem>
            )}
            <IonItem>
              <IonLabel>
                <h2>Prevent screen burn in</h2>
                <IonNote className="ion-text-wrap">
                  Lets the screen pulsate once in a while
                </IonNote>
              </IonLabel>
              <IonToggle
                enableOnOffLabels
                slot="end"
                checked={displayCare === "true"}
                onIonChange={(e) => setDisplayCare(`${e.detail.checked}`)}
              ></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h2>Battery save mode</h2>
                <IonNote className="ion-text-wrap">
                  Disables the nightlight when battery hits a certain state
                </IonNote>
              </IonLabel>
              <IonToggle
                enableOnOffLabels
                slot="end"
                checked={battery === "true"}
                onIonChange={(e) => setBattery(`${e.detail.checked}`)}
              ></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>Use maximum screen brightness</h2>
              </IonLabel>
              <IonToggle
                enableOnOffLabels
                slot="end"
                checked={useMaximumBrightness === "true"}
                onIonChange={(e) => {
                  setUseMaximumBrightness(`${e.detail.checked}`);
                }}
              ></IonToggle>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Settings;
