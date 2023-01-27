import React from "react";
import { CotizacionForm } from "../components/CotizacionForm";

function Cotizacion() {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-10 col-lg-8">
        <h2 className="title is-2 mb-5">Cotizaciones</h2>
      </div>
      <hr />
      <div className="col-sm-12 col-md-6 col-lg-6 cotiForm">
        <CotizacionForm />
      </div>
    </div>
  );
}
export default Cotizacion;
