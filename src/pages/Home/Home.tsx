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

import Intro from "../../components/Intro";
import { useStore } from "../../store/Store";

const Home = () => {
  const history = useHistory();
  const { enabled } = useStore();
  const [isAppEnabled, setAppEnabled] = useAtom(enabled);

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

      <IonContent>
        {!isAppEnabled && <Intro />}
        <IonFab slot="fixed" horizontal="center" vertical="bottom">
          <IonFabButton onClick={() => setAppEnabled(!isAppEnabled)}>
            {isAppEnabled ? (
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
