import React from "react";
import Iframe from "react-iframe";
// import { ButtonCotizacion } from "./ButtonCotizacion";

export function ModalCatalogo() {
  const url = window.location.pathname;
  const _URL = url.slice(1);
  console.log(_URL);
  // const name = this.props.match.params.name;
  return (
    <>
      <div>
        <Iframe
          url={_URL}
          width="100%"
          height="100%"
          display="initial"
          position="relative"
          className="catIframe"
        />
      </div>
      {/* <div>
        <ButtonCotizacion />
      </div> */}
    </>
  );
}
