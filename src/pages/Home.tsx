import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Calculator from "../components/Calculator";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora - Primera entrega</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Calculator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
