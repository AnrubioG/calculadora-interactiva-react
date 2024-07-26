import "./App.css";
import Button from "./components/Button";
import fccLogo from "/img/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img className="fcc-logo" src={fccLogo} alt="logo de freecodecamp" />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>x</Button>
        </div>
        <div className="fila">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="fila">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="fila">
          <Button>AC</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className="fila">
          {/* <Button> = </Button> */}
          <Button className="ac-button"> = </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
