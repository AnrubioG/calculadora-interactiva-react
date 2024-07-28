import React from "react";
import "../css/Button.css";
function Button(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== ".";
  };
  return (
    <div
      className={`boton-contenedor 
        ${esOperador(props.children) ? "operador" : ""}`.trim()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
