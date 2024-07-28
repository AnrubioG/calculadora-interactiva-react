import "./App.css";
import Button from "./components/Button";
import ButtonClear from "./components/ButtonClear";
import Pantalla from "./components/Pantalla";
import fccLogo from "/img/freecodecamp-logo.png";
import { useState } from "react";
import { evaluate, log, re } from "mathjs";

function App() {
  const [input, setImput] = useState("");
  let resultado = "";

  const agregarInput = (val) => {
    // console.log(resultado);
    // if (resultado === "") {
    //   setImput(input + val);
    //   console.log(resultado);
    // } else {
    //   console.log(resultado);
    // }
    setImput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      resultado = evaluate(input);
      setImput(resultado);
      console.log(resultado);
    } else {
      setImput("");
    }
  };

  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img className="fcc-logo" src={fccLogo} alt="logo de freecodecamp" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <ButtonClear manejarClic={() => setImput("")}>AC</ButtonClear>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <div className="fila">
          <Button className="ac-button" manejarClic={calcularResultado}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
