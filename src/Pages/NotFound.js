import React from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";

export const NotFound = () => {
  return (
    <div>
      <p className="title"> 404! </p>
      <h2 className="subtitle">The Page is not exist...</h2>
      <br />
      <ButtonBackToHome />
    </div>
  );
};
