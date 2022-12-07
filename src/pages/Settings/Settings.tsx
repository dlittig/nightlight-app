import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
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
      <IonList lines="inset">
        <IonItem>
          <IonLabel>Inset Lines</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Inset Lines</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Inset Lines</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);

export default Settings;
