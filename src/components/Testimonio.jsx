import React from "react";
//css
import "../styles/Testimonios.css";

function Testimonio(props) {
  return (
    <div className="cont-testimonio">
      <img
        className="img-testimonio"
        src={require(`../imgs/${props.img}.png`)}
        alt={props.altname}
      />
      <div className="cont-text-testimonio">
        <p className="name-testimonio">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="txt-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;
