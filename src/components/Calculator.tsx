import "./Calculator.css";
import React from "react";
import {
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface ContainerProps {}

const Calculator = () => {
  return (
    <IonCard className="IonCard">
      <img
        alt="Silhouette of mountains"
        src="https://wallpapers.com/images/hd/radiant-light-bulb-8vg12xf4p0gou9np.jpg"
      />
      <IonGrid fixed={true}>
        <IonRow class="ion-justify-content-between">
          <IonCol class="IonCol light">AC</IonCol>
          <IonCol class="IonCol light">+/-</IonCol>
          <IonCol class="IonCol light">%</IonCol>
          <IonCol class="IonCol dark">+</IonCol>
        </IonRow>
        <IonRow class="ion-justify-content-between">
          <IonCol class="IonCol">7</IonCol>
          <IonCol class="IonCol">8</IonCol>
          <IonCol class="IonCol">9</IonCol>
          <IonCol class="IonCol dark">x</IonCol>
        </IonRow>
        <IonRow class="ion-justify-content-between">
          <IonCol class="IonCol">4</IonCol>
          <IonCol class="IonCol">5</IonCol>
          <IonCol class="IonCol">6</IonCol>
          <IonCol class="IonCol dark">-</IonCol>
        </IonRow>
        <IonRow class="ion-justify-content-between">
          <IonCol class="IonCol">1</IonCol>
          <IonCol class="IonCol">2</IonCol>
          <IonCol class="IonCol">3</IonCol>
          <IonCol class="IonCol dark">+</IonCol>
        </IonRow>
        <IonRow class="ion-justify-content-between">
          <IonCol class="IonCol">0</IonCol>
          <IonCol class="IonCol">,</IonCol>
          <IonCol class="IonCol">.</IonCol>
          <IonCol class="IonCol dark">=</IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};
export default Calculator;
