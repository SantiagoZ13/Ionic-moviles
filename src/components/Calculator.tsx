import "./Calculator.css";
import React, { useState } from "react";
import { IonCard, IonGrid, IonRow, IonCol } from "@ionic/react";

interface ContainerProps {}

const Calculator = () => {
  console.log(Math.sin(90));
  const [showAdvanceOptions, setShowAdvanceOptions] = useState(false);
  const [advance, setAdvance] = useState("");
  const [radians, setRadians] = useState(true);

  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);

  const handleNumberClick = (value: string) => {
    setInput((prev) => (prev === "0" ? value : prev + value));
  };

  const handleOperatorClick = (op: string) => {
    if (op === "sin") {
      setAdvance("sen(");
    } else if (op === "cos") {
      setAdvance("cos(");
    } else {
      setPreviousValue(input);
    }
    setOperator(op);
    setInput("0");
  };

  const calculateResult = () => {
    let result = 0;
    if (operator && previousValue) {
      const prev = parseFloat(previousValue);
      const current = parseFloat(input);

      switch (operator) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "x":
          result = prev * current;
          break;
        case "/":
          result = current !== 0 ? prev / current : 0;
          break;
        case "pow":
          result = Math.pow(prev, current);
          break;
        default:
          return;
      }
    } else if (operator === "sin" || operator === "cos") {
      const prev = parseFloat(input);
      switch (operator) {
        case "sin":
          radians
            ? (result = Math.sin(prev))
            : (result = Math.sin(prev * (Math.PI / 180)));
          result = parseFloat(result.toFixed(10));
          break;
        case "cos":
          radians
            ? (result = Math.cos(prev))
            : (result = Math.cos(prev * (Math.PI / 180)));
          result = parseFloat(result.toFixed(10));
          break;
      }
    }
    setInput(result.toString());
    setOperator(null);
    setPreviousValue(null);
    setAdvance("");
  };

  const handleClear = () => {
    setInput("0");
    setOperator(null);
    setPreviousValue(null);
    setAdvance("");
  };

  return (
    <div className="main-container">
      <IonCard className="IonCard">
        <div className="calculator-screen">{advance + input}</div>
        <IonGrid fixed={true}>
          <IonRow class="ion-justify-content-between">
            <IonCol class="IonCol">
              <button
                onClick={() => handleClear()}
                className="calculator-key light"
              >
                AC
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => setShowAdvanceOptions(!showAdvanceOptions)}
                className="calculator-key light"
              >
                π/^
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button className="calculator-key light">%</button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleOperatorClick("/")}
                className="calculator-key dark"
              >
                /
              </button>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-between">
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("7")}
                className="calculator-key"
              >
                7
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("8")}
                className="calculator-key"
              >
                8
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("9")}
                className="calculator-key"
              >
                9
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleOperatorClick("x")}
                className="calculator-key dark"
              >
                x
              </button>
            </IonCol>
          </IonRow>

          <IonRow class="ion-justify-content-between">
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("4")}
                className="calculator-key"
              >
                4
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("5")}
                className="calculator-key"
              >
                5
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("6")}
                className="calculator-key"
              >
                6
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleOperatorClick("-")}
                className="calculator-key dark"
              >
                -
              </button>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-between">
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("1")}
                className="calculator-key"
              >
                1
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("2")}
                className="calculator-key"
              >
                2
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("3")}
                className="calculator-key"
              >
                3
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleOperatorClick("+")}
                className="calculator-key dark"
              >
                +
              </button>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-between">
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick("0")}
                className="calculator-key"
              >
                0
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick(",")}
                className="calculator-key"
              >
                ,
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => handleNumberClick(".")}
                className="calculator-key"
              >
                .
              </button>
            </IonCol>
            <IonCol class="IonCol">
              <button
                onClick={() => calculateResult()}
                className="calculator-key dark"
              >
                =
              </button>
            </IonCol>
          </IonRow>
          {showAdvanceOptions && (
            <IonRow className="ion-justify-content-between">
              <IonCol>
                <button
                  onClick={() => handleOperatorClick("sin")}
                  className="calculator-key"
                >
                  Sen
                </button>
              </IonCol>
              <IonCol>
                <button
                  onClick={() => handleOperatorClick("cos")}
                  className="calculator-key"
                >
                  Cos
                </button>
              </IonCol>
              <IonCol>
                <button
                  onClick={() => handleOperatorClick("pow")}
                  className="calculator-key"
                >
                  ^
                </button>
              </IonCol>
              <IonCol>
                <button
                  onClick={() => setRadians(!radians)}
                  className="calculator-key"
                >
                  °
                </button>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonCard>
    </div>
  );
};
export default Calculator;
