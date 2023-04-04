import React from "react";
import Iframe from "react-iframe";
import s from "./styles/ModalCatalogo.module.css";
// import { ButtonCotizacion } from "./ButtonCotizacion";

export function ModalCatalogo({ url, name }) {
  // const url = window.location.pathname;
  // const _URL = url.slice(1);
  // console.log(_URL);
  // const name = this.props.match.params.name;

  return (
    <>
      <div>
        <Iframe
          url={url}
          name={name}
          width="80%"
          height="90%"
          display="fixed"
          position="relative"
          className={`${s.frameContainer}`}
        />
      </div>
      {/* <div>
        <ButtonCotizacion />
      </div> */}
    </>
  );
}
