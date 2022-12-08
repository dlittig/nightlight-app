import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Settings = () => (
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
          <IonLabel>Color</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Prevent screen burn in</h2>
            <IonNote className="ion-text-wrap">
              Lets the screen pulsate once in a while
            </IonNote>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Battery save mode</h2>
            <IonNote className="ion-text-wrap">
              Disables the nightlight when battery hits a certain state
            </IonNote>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);

export default Settings;
