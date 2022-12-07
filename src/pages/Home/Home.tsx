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
  settingsOutline as SettingsOutlineIcon,
} from "ionicons/icons";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

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
        <IonFab slot="fixed" horizontal="center" vertical="bottom">
          <IonFabButton>
            <IonIcon icon={PlayOutlineIcon}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
