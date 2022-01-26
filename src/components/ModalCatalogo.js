import React from "react";
import Iframe from "react-iframe";
import s from "./styles/ModalCatalogo.module.css";
// import { ButtonCotizacion } from "./ButtonCotizacion";

export function ModalCatalogo(props) {
  // const url = window.location.pathname;
  // const _URL = url.slice(1);
  // console.log(_URL);
  // const name = this.props.match.params.name;

  return (
    <>
      <div>
        <Iframe
          url={props.name}
          name={props.name}
          // width="100%"
          // height="100%"
          // display="fixed"
          // position="relative"
          className={`${s.frameContainer}`}
        />
      </div>
      {/* <div>
        <ButtonCotizacion />
      </div> */}
    </>
  );
}
