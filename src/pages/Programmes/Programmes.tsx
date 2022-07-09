import {
  IonPage,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
} from "@ionic/react";

import styles from "./Programmes.module.css";

const majors = [
  "BSc. General - Computer Science Major",
  "BSc. General - Software Engineering Major",
  "BSc Information Technology",
  "BSc. Software Engineering (Mobile Application Technologies",
  "BSc Computer Studies Option",
];

const minors = [
  "Minor in Computer Science",
  "Minor in Software Engineering",
  "Minor in Information Technology",
];
const Programmes: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className={styles.content_wrapper}>
          <h1 className={styles.header_margin}> Majors </h1>
          {majors.map((major, index) => {
            return <li> {major}</li>;
          })}

          <h1>Minors</h1>
          {minors.map((minor, index) => {
            return <li>{minor}</li>;
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Programmes;
