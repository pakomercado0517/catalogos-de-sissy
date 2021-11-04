import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonCotizacion = () => {
  return (
    <Link
      to="/cotizacion"
      className="button is-success is-outlined is-rounded is-medium">
      <div>
        <span className="icon is-medium">
          <FontAwesomeIcon icon={["fab", "whatsapp"]} />
        </span>
        <span>Cotiza tus productos aquí</span>
      </div>
    </Link>
  );
};
