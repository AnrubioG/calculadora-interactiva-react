import React from "react";
import "../css/ButtonClear.css";

const ButtonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClic}>
    {props.children}
  </div>
);

export default ButtonClear;
