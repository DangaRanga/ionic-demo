import {
  IonPage,
  IonButton,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
} from "@ionic/react";

const NavBar: React.FC = () => {
  return (
    <>
      <IonHeader className="ion-margin-bottom">
        <IonToolbar>
          <IonTitle>Logo</IonTitle>
          <div slot="end">
            <IonButton fill="clear" color="dark" routerLink="/home">
              Home{" "}
            </IonButton>
            <IonButton fill="clear" color="dark" routerLink="/programmes">
              Programmes{" "}
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default NavBar;
