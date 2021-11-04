import React, { Component } from "react";
import { CotizacionForm } from "../components/CotizacionForm";

export class Cotizacion extends Component {
  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-sm-12 col-md-10 col-lg-8'>
          <h2 className="title is-2 mb-5">Cotizaciones</h2>
        </div>
        <hr/>
        <div className='col-sm-12 col-md-6 col-lg-6 cotiForm'>
          <CotizacionForm />
        </div>
      </div>
    );
  }
}
