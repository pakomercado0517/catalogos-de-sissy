import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonBackToHome = () => {
  return (
    <Link to="/" className="button is-info is-outlined is-rounded is-medium">
      <div>
        <span className="icon">
          <FontAwesomeIcon icon={["fas", "house-user"]} />
        </span>
        <span>Ir a Inicio</span>
      </div>
    </Link>
  );
};
